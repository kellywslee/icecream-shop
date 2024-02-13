import { FaPlusCircle } from "react-icons/fa";
import { TiEquals } from "react-icons/ti";
import { useCurrentUser } from "../hooks/useAuth";
import { useCart } from "../hooks/useCart";
import CartItem from "./ui/CartItem";
import PriceCard from "./ui/PriceCard";
import Loader from "./ui/Loader";

export default function Cart() {
  const { user } = useCurrentUser();
  const { items, isLoading } = useCart(user?.uid);

  if (isLoading) return <Loader />;

  const hasItems = items && items.length > 0;
  const subTotal =
    items &&
    items
      .reduce((prev, curr) => prev + curr.price * curr.quantity, 0)
      .toFixed(2);
  const tax = subTotal * 0.13;

  return (
    <section>
      {!hasItems && <p>Cart is empty</p>}
      {hasItems && (
        <>
          <ul>
            {items.map((item) => (
              <CartItem key={item.id} item={item} uid={user.uid} />
            ))}
          </ul>
          <div>
            <PriceCard text="sub total" price={subTotal} />
            <FaPlusCircle />
            <PriceCard text="tax" price={tax} />
            <TiEquals />
            <PriceCard text="total price" price={subTotal + tax} />
          </div>
        </>
      )}
    </section>
  );
}
