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
  const res = await ctx.env.ASSETS.fetch(ctx.request);
  if (res.status !== 404) return res;

  // and then fallback to go handlers
  try {
    await load;
    await readyPromise;

    const resp = await handleRequest(ctx.request, { env: ctx.env, ctx });

    // if backend returns 404, then serve the static 404 page
    if (resp.status === 404) return ctx.env.ASSETS.fetch(ctx.request);

    return Response.json(await resp.json(), {
      status: resp.status,
    });
  } catch (_) {
    return new Response("Bad request", { status: 400 });
  }
}
