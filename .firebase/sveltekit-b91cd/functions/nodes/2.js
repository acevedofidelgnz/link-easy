

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/login/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.16fa1418.js","_app/immutable/chunks/scheduler.f8075506.js","_app/immutable/chunks/index.d9e2fe16.js","_app/immutable/chunks/stores.e88b64dc.js","_app/immutable/chunks/singletons.01db55d5.js","_app/immutable/chunks/index.424f457e.js","_app/immutable/chunks/index.40b40403.js"];
export const stylesheets = [];
export const fonts = [];
