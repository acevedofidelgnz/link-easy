import * as server from '../entries/pages/_username_/bio/_page.server.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_username_/bio/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[username]/bio/+page.server.ts";
export const imports = ["_app/immutable/nodes/8.bba53815.js","_app/immutable/chunks/scheduler.f8075506.js","_app/immutable/chunks/index.d9e2fe16.js","_app/immutable/chunks/stores.e88b64dc.js","_app/immutable/chunks/singletons.01db55d5.js","_app/immutable/chunks/index.424f457e.js","_app/immutable/chunks/parse.bee59afc.js"];
export const stylesheets = [];
export const fonts = [];
