

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.ad1b42b2.js","_app/immutable/chunks/scheduler.f8075506.js","_app/immutable/chunks/index.d9e2fe16.js","_app/immutable/chunks/stores.e88b64dc.js","_app/immutable/chunks/singletons.01db55d5.js","_app/immutable/chunks/index.424f457e.js"];
export const stylesheets = [];
export const fonts = [];
