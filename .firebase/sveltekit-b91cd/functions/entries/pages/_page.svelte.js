import { v as validate_store, s as subscribe } from "../../chunks/utils.js";
import { c as create_ssr_component, e as escape } from "../../chunks/ssr.js";
import { u as userData } from "../../chunks/firebase.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $userData, $$unsubscribe_userData;
  validate_store(userData, "userData");
  $$unsubscribe_userData = subscribe(userData, (value) => $userData = value);
  $$unsubscribe_userData();
  return `${$$result.head += `<!-- HEAD_svelte-1n5uy08_START -->${$$result.title = `<title>LinkEase - a place for links</title>`, ""}<meta name="description" content="Demo project for the Full SvelteKit Course by Fireship"><!-- HEAD_svelte-1n5uy08_END -->`, ""} <main class="flex w-full min-h-screen"><div class="hero bg-base-200"><div class="hero-content text-center"><div class="w-full"><h1 class="text-7xl font-bold" data-svelte-h="svelte-1v2fm0r">LinkEase</h1> <p class="py-6 text-2xl" data-svelte-h="svelte-19jitdk">One simple link to share all</p> ${$userData?.username ? `<a href="${"/" + escape($userData.username, true) + "/edit"}" class="btn btn-primary">Edit Profile</a>` : `<a href="/login" class="btn btn-primary" data-svelte-h="svelte-izohf9">Get Started</a> <a href="/fireship" class="btn btn-secondary" data-svelte-h="svelte-1s7f1h6">Example Profile</a>`}</div></div></div></main>`;
});
export {
  Page as default
};
