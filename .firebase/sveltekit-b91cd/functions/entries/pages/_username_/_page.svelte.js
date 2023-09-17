import { v as validate_store, s as subscribe } from "../../../chunks/utils.js";
import { c as create_ssr_component, e as escape, a as add_attribute, b as each, v as validate_component } from "../../../chunks/ssr.js";
import { U as UserLink } from "../../../chunks/UserLink.js";
import { u as userData } from "../../../chunks/firebase.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $userData, $$unsubscribe_userData;
  validate_store(userData, "userData");
  $$unsubscribe_userData = subscribe(userData, (value) => $userData = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_userData();
  return `${$$result.head += `<!-- HEAD_svelte-2pftis_START -->${$$result.title = `<title>@${escape(data.username)} Links</title>`, ""}<meta name="description"${add_attribute("content", data.bio, 0)}><!-- HEAD_svelte-2pftis_END -->`, ""} <main class="prose text-center mx-auto mt-8"><h1 class="text-3xl text-purple-500 mb-4">@${escape(data.username)}</h1> <img${add_attribute("src", data.photoURL ?? "/user.png", 0)} alt="photoURL" width="256" class="mx-auto"> <button class="mt-4 btn btn-xs btn-accent"><a${add_attribute("href", `/${$userData?.username}/edit`, 0)}>Edit Profile</a></button> <p class="text-xl my-8">${escape(data.bio ?? "no bio yet...")}</p> <ul class="list-none">${each(data.links, (item) => {
    return `<li class="my-2">${validate_component(UserLink, "UserLink").$$render($$result, Object.assign({}, item), {}, {})} </li>`;
  })}</ul></main>`;
});
export {
  Page as default
};
