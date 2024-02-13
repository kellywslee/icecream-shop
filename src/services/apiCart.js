import { ref, set, get, remove } from "firebase/database";
import { database } from "./firebase";

export async function getCart(userId) {
  try {
    const snapshot = await get(ref(database, `carts/${userId}`));
    if (snapshot.exists()) {
      const data = snapshot.val() || {};
      return Object.values(data);
    }
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function addOrUpdateCart({ userId, iceCream }) {
  try {
    await set(ref(database, `carts/${userId}/${iceCream.id}`), iceCream);
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function removeFromCart(userId, iceCreamId) {
  try {
    await remove(ref(database, `carts/${userId}/${iceCreamId}`));
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}
