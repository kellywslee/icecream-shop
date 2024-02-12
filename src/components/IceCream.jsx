import { useLocation } from "react-router-dom";

export default function IceCream() {
  const {
    state: {
      iceCream: { title, image, price, categories, description, options },
    },
  } = useLocation();
  return (
    <section className="flex w-11/12 flex-col items-center rounded-xl bg-rose-50">
      <img src={image} alt={title} className="w-64" />
      <div className="px-4">
        <h2 className="font-semibold">{title}</h2>
        <p>{`$ ${price}`}</p>
        <p className="text-xs">{description}</p>
      </div>
    </section>
  );
}
