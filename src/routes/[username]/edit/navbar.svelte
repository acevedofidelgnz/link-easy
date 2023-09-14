<script>

import { db, userData, user, auth } from "$lib/firebase";
  import { signOut } from "firebase/auth";
async function signOutSSR() {
    const res = await fetch("/api/signin", { method: "DELETE" });
    await signOut(auth);
  }
</script>

<div class="navbar bg-base-100">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        </label>
        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li><a>Homepage</a></li>
          <li><a>Portfolio</a></li>
          <li><a>About</a></li>
        </ul>
      </div>
    </div>
    <div class="navbar-center">
      <div class="join">
        <button class="btn join-item"><a href={`/${$userData?.username}`}>👁️ <span class="hidden lg:inline">View Profile</span></a></button>
        <button class="btn join-item"> <a href={`/${$userData?.username}/edit`}>🔗<span class="hidden lg:inline">Edit Profile</span></a></button>
        <button class="btn join-item"> <a href={`/${$userData?.username}/bio`}>🍪 <span class="hidden lg:inline">Edit Bio</span></a></button>
      </div>
    </div>
    <div class="navbar-end">
    <button class="btn btn-outline btn-xs" on:click={signOutSSR}>Sign out</button>
    </div>
  </div>