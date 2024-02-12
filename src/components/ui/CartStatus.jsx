import { RiShoppingBag3Fill } from "react-icons/ri";
import { useCurrentUser } from "../../hooks/useAuth";
import { useCart } from "../../hooks/useCart";

export default function CartStatus() {
  const { user } = useCurrentUser();
  const { items } = useCart(user?.uid);

  return (
    <div className="relative">
      <RiShoppingBag3Fill className="text-3xl" aria-label="shopping cart" />
      {items && (
        <span className="absolute -right-2 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-pink-600 font-rubik text-yellow-200">
          {items.length}
        </span>
      )}
    </div>
  );
}
