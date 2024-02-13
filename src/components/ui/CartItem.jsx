/* eslint-disable react/prop-types */
import { MdAddCircleOutline, MdRemoveCircleOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useAddOrUpdateCart, useRemoveFromCart } from "../../hooks/useCart";

export default function CartItem({
  item,
  item: { id, image, title, option, quantity, price },
  uid,
}) {
  const { addOrUpdateCart } = useAddOrUpdateCart();
  const { removeFromCart } = useRemoveFromCart();

  const handleAdd = () => {
    addOrUpdateCart({
      userId: uid,
      iceCream: { ...item, quantity: quantity + 1 },
    });
  };

  const handleRemove = () => {
    if (quantity < 2) return;
    addOrUpdateCart({
      userId: uid,
      iceCream: { ...item, quantity: quantity - 1 },
    });
  };
  const handleDelete = () => removeFromCart(uid, id);

  return (
    <li className="flex w-full items-center justify-center rounded-lg bg-rose-100 p-2 pr-8 shadow-md">
      <img src={image} alt={title} className="w-36" />
      <div className="flex flex-col text-sm ">
        <p className="font-semibold">{title}</p>
        <p>{`$ ${price}`}</p>
        <p>option: {option}</p>
        <div className="mt-2 flex items-center gap-3 text-xl">
          <MdRemoveCircleOutline onClick={handleRemove} className="cart-icon" />
          <span className="text-base font-semibold">{quantity}</span>
          <MdAddCircleOutline onClick={handleAdd} className="cart-icon" />
          <RiDeleteBin6Line onClick={handleDelete} className="cart-icon" />
        </div>
      </div>
    </li>
  );
}
