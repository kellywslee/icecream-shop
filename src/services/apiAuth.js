import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "./firebase";

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
      (user) => {
        unsubscribe();
        resolve(user);
      },
      reject,
    );
  });
}
