import { useLocation } from "react-router-dom";

export default function IceCream() {
  const {
    state: {
      iceCream: { title, image, price, categories, description, options },
    },
  } = useLocation();
  return (
    <section className="flex w-5/6 rounded-xl bg-rose-50">
      <img src={image} alt={title} className="w-64" />
      <div>
        <h2>{title}</h2>
      </div>
    </section>
  );
}
