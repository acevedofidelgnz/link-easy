import { v as validate_store, s as subscribe } from "../../../chunks/utils.js";
import { c as create_ssr_component, e as escape } from "../../../chunks/ssr.js";
import { a as user } from "../../../chunks/firebase.js";
import "firebase/auth";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  validate_store(user, "user");
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  $$unsubscribe_user();
  return `${$user ? `<h2 class="card-title">Welcome, ${escape($user.displayName)}</h2> <p class="text-center text-success" data-svelte-h="svelte-1958qcl">You are logged in</p> <a class="btn btn-primary" href="/login/username" data-svelte-h="svelte-dhdkr2">Pick username</a> ` : `<h2 class="card-title" data-svelte-h="svelte-1hd9ppu">Sign in</h2> <p data-svelte-h="svelte-sjm5fy">This feature demonstrates cookie-based auth with Firebase</p> <button class="btn btn-primary" data-svelte-h="svelte-eubzr8">Sign in with Google</button>`}`;
});
export {
  Page as default
};
