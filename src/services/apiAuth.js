import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./firebase";

export async function signup({ email, password, displayName }) {
  try {
    //signup
    console.log(email, password, displayName);
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );

    console.log(userCredential.user);

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

// export function signup({ email, password, displayName }) {
//   return createUserWithEmailAndPassword(auth, email, password).then(
//     (userCredential) => {
//       return userCredential.user.updateProfile({
//         displayName,
//       });
//     },
//   );
// }

// export async function signin(email, password) {
//   try {
//     const userCredential = await signInWithEmailAndPassword(
//       auth,
//       email,
//       password,
//     );

//     const user = userCredential.user;
//   } catch (error) {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log(errorCode, errorMessage);
//   }
// }
