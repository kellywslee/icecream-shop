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
    <li>
      <img src={image} alt={title} />
      <div>
        <p>{title}</p>
        <p>{option}</p>
        <div>
          <MdAddCircleOutline onClick={handleAdd} />
          <span>{quantity}</span>
          <MdRemoveCircleOutline onClick={handleRemove} />
          <RiDeleteBin6Line onClick={handleDelete} />
        </div>
        <p>{price}</p>
      </div>
    </li>
  );
}
