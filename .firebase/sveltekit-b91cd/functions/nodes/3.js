

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.8adb7bda.js","_app/immutable/chunks/scheduler.f8075506.js","_app/immutable/chunks/index.d9e2fe16.js","_app/immutable/chunks/firebase.69c0a5a7.js","_app/immutable/chunks/index.424f457e.js"];
export const stylesheets = [];
export const fonts = [];
