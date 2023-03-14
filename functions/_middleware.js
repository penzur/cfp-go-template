import "../helpers/polyfill_performance.js";
import "../helpers/wasm_exec_go.js";
import api from "../api.wasm";

const go = new Go();

const readyPromise = new Promise((resolve) => {
  globalThis.ready = resolve;
});

const load = WebAssembly.instantiate(api, go.importObject).then((instance) => {
  go.run(instance);
  return instance;
});

export async function onRequest(ctx) {
  // Serve static files first
  const staticResponse = await ctx.env.ASSETS.fetch(ctx.request);
  if (staticResponse.status !== 404) return staticResponse;

  // and then fallback to go handlers
  try {
    await load;
    await readyPromise;

    const goResponse = await handleRequest(ctx.request, {
      env: ctx.env,
      ctx,
    });
    // if backend returns 404, then serve static 404 page
    if (goResponse.status === 404) return ctx.env.ASSETS.fetch(ctx.request);
    return goResponse;
  } catch (_) {
    return new Response("Bad request", { status: 400 });
  }
}
