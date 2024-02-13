/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

export default function IceCreamCard({
  iceCream,
  iceCream: { id, image, title, categories, price },
}) {
  const navigate = useNavigate();

  return (
    <li
      onClick={() => {
        navigate(`/icecreams/${id}`, { state: { iceCream } });
      }}
      className="flex flex-col items-center justify-center rounded-lg bg-rose-100 pb-12 shadow-lg transition-all hover:translate-x-1 hover:translate-y-1"
    >
      <img src={image} alt={title} className="w-11/12" />
      <div className="flex flex-col items-center gap-1">
        <h3 className="text-lg font-semibold">{title.toLowerCase()}</h3>
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
      </div>
    </li>
  );
}
