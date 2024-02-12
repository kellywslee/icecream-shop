import { ref, set, get } from "firebase/database";
import { database } from "./firebase";
import { v4 as uuid } from "uuid";

export async function addNewIceCream(iceCream) {
  try {
    const id = uuid();
    await set(ref(database, `iceCreams/${id}`), {
      ...iceCream,
      id,
      price: parseFloat(iceCream.price),
      options: iceCream.options.split(","),
      categories: iceCream.categories.split(","),
    });
  } catch (error) {
    console.log(error.code, error.message);
    throw error;
  }
}

export async function getIceCreams() {
  try {
    const snapshot = await get(ref(database, "iceCreams"));
    if (snapshot.exists()) {
      const data = snapshot.val();
      return Object.values(data);
    }
    return [];
  } catch (error) {
    console.log(error.code, error.message);
    throw error;
  }
}
