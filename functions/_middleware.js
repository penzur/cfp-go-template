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
  // serve static first
  const url = new URL(ctx.request.url);
  if (!url.pathname.startsWith("/api")) {
    return ctx.env.ASSETS.fetch(ctx.request);
  }

  // then api
  try {
    await load;
    await readyPromise;
    const resp = await handleRequest(ctx.request, { env: ctx.env, ctx });
    return Response.json(await resp.json(), {
      status: resp.status,
    });
  } catch (_) {
    return new Response("Bad request", { status: 400 });
  }
}
