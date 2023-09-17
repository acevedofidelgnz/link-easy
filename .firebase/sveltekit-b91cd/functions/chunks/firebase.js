import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, onSnapshot } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { d as derived, w as writable } from "./index2.js";
const firebaseConfig = {
  apiKey: "AIzaSyADLpn8mLmoBE2Y0s38CuE0FQ2EIHebNLo",
  authDomain: "sveltekit-b91cd.firebaseapp.com",
  projectId: "sveltekit-b91cd",
  storageBucket: "sveltekit-b91cd.appspot.com",
  messagingSenderId: "494832793042",
  appId: "1:494832793042:web:8207ed3f6c7dc41134040b",
  measurementId: "G-0XLGHSQ658"
};
initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
getStorage();
function userStore() {
  let unsubscribe;
  if (!auth || !globalThis.window) {
    console.warn("Auth is not initialized or not in browser");
    const { subscribe: subscribe2 } = writable(null);
    return {
      subscribe: subscribe2
    };
  }
  const { subscribe } = writable(auth?.currentUser ?? null, (set) => {
    unsubscribe = onAuthStateChanged(auth, (user2) => {
      set(user2);
    });
    return () => unsubscribe();
  });
  return {
    subscribe
  };
}
const user = userStore();
function docStore(path) {
  let unsubscribe;
  const docRef = doc(db, path);
  const { subscribe } = writable(null, (set) => {
    unsubscribe = onSnapshot(docRef, (snapshot) => {
      set(snapshot.data() ?? null);
    });
    return () => unsubscribe();
  });
  return {
    subscribe,
    ref: docRef,
    id: docRef.id
  };
}
const userData = derived(user, ($user, set) => {
  if ($user) {
    return docStore(`users/${$user.uid}`).subscribe(set);
  } else {
    set(null);
  }
});
export {
  user as a,
  db as d,
  userData as u
};
