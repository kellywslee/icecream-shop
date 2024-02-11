import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { ref, get } from "firebase/database";
import { auth } from "./firebase";
import { database } from "./firebase";

export async function signup({ email, password, displayName }) {
  try {
    //signup

    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );

    if (!userCredential.user) {
      throw new Error("Could not complete signup");
    }

    // update profile
    await updateProfile(userCredential.user, {
      displayName,
    });

    await signInWithEmailAndPassword(auth, email, password);
    return auth.currentUser;
  } catch (error) {
    console.log(error.code, error.message);
    throw error;
  }
}

export async function login({ email, password }) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return auth.currentUser;
  } catch (error) {
    console.log(error.code, error.message);
    throw error;
  }
}

export async function logout() {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error.code, error.message);
    throw error;
  }
}

export function getCurrentUser() {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      async (user) => {
        if (user) {
          const updatedUser = await adminUser(user);
          resolve(updatedUser);
        } else {
          resolve(null);
        }
        unsubscribe();
      },
      reject,
    );
  });
}

async function adminUser(user) {
  return get(ref(database, "admins")).then((snapshot) => {
    if (snapshot.exists()) {
      const admins = snapshot.val();
      const isAdmin = admins.includes(user.uid);
      return { ...user, isAdmin };
    }
    return user;
  });
}
