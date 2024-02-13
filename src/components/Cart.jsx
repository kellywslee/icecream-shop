import { Link } from "react-router-dom";
import { FaPlusCircle } from "react-icons/fa";
import { TiEquals } from "react-icons/ti";
import { useCurrentUser } from "../hooks/useAuth";
import { useCart } from "../hooks/useCart";
import CartItem from "./ui/CartItem";
import PriceCard from "./ui/PriceCard";
import Loader from "./ui/Loader";
import Button from "./ui/Button";

export default function Cart() {
  const { user } = useCurrentUser();
  const { items, isLoading } = useCart(user?.uid);

  if (isLoading) return <Loader />;

  const hasItems = items && items.length > 0;
  const subTotal = +items
    ?.reduce((prev, curr) => prev + curr.price * curr.quantity, 0)
    .toFixed(2);
  const tax = parseFloat((subTotal * 0.13).toFixed(2));
  const total = (subTotal + tax).toFixed(2);

  return (
    <section className="flex w-full flex-col items-center">
      {!hasItems && (
        <div className="mt-12 flex flex-col items-center gap-2">
          <p className="font-semibold">your cart is empty</p>
          <Link
            to="/menu"
            className="underline-offset-4 transition-all hover:underline"
          >
            Back to Menu
          </Link>
        </div>
      )}
      {hasItems && (
        <div className="mx-auto flex w-11/12 flex-col items-center gap-4">
          <ul className="flex flex-col items-center gap-3">
            {items.map((item) => (
              <CartItem key={item.id} item={item} uid={user.uid} />
            ))}
          </ul>
          <div className="flex items-center justify-around gap-2">
            <PriceCard text="sub total" price={subTotal} />
            <FaPlusCircle className="text-xl" />
            <PriceCard text="tax" price={tax} />
            <TiEquals className="text-xl" />
            <PriceCard text="total" price={total} />
          </div>
          <Button type="order">order</Button>
        </div>
      )}
    </section>
  );
}
