import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useCurrentUser } from "../hooks/useAuth";
import Button from "./ui/Button";
import { addOrUpdateCart } from "../services/apiCart";

export default function IceCream() {
  const {
    state: {
      iceCream: { id, title, image, price, categories, description, options },
    },
  } = useLocation();

  const [selected, setSelected] = useState(options && options[0]);
  const { user } = useCurrentUser();

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };
  const handleClick = (e) => {
    const iceCream = { id, title, image, price, option: selected, quantity: 1 };
    addOrUpdateCart(user.uid, iceCream);
  };

  return (
    <section className="flex w-11/12 flex-col items-center rounded-xl bg-rose-50 pb-10 shadow-md md:w-5/6 lg:w-2/3">
      <img src={image} alt={title} className="w-64" />
      <div className="flex flex-col items-center gap-2 px-6 text-sm">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p>{`$ ${price}`}</p>
        <ul className="flex flex-wrap justify-center gap-1 text-xs">
          {categories.map((category) => (
            <li
              key={category}
              className="rounded-xl bg-rose-200 px-2 py-1 font-semibold"
            >
              {category}
            </li>
          ))}
        </ul>
        <p className="my-2">{description}</p>
        <div className="flex w-full items-center justify-center gap-3">
          <label htmlFor="options" className="font-semibold">
            select:
          </label>
          <select
            id="select"
            onChange={handleSelect}
            value={selected}
            className="flex-1 rounded-md border-rose-500 bg-rose-200 p-2 focus:outline-none focus:ring focus:ring-rose-400 md:w-1/3 md:flex-none"
          >
            {options.map((option) => (
              <option key={option} value={option} className="font-semmibold">
                {option}
              </option>
            ))}
          </select>

          <Button type="order" onClick={handleClick}>
            Add to Cart
          </Button>
        </div>
      </div>
    </section>
  );
}
