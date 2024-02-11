import { ref, set } from "firebase/database";
import { database } from "./firebase";
import { v4 as uuid } from "uuid";

export async function addNewIceCream(iceCream) {
  try {
    const id = uuid();
    console.log("Ice Cream Data:", { ...iceCream });
    await set(ref(database, `iceCreams/${id}`), {
      ...iceCream,
      id,
      price: parseInt(iceCream.price, 10),
      options: iceCream.options ? iceCream.options.split(",") : [],
    });
  } catch (error) {
    console.log(error.code, error.message);
    throw error;
  }
}
