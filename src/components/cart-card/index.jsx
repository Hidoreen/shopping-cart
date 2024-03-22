import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/slice-cart/cart-slice";

export default function CartItem({ cartItem }) {
  const dispatch = useDispatch();

  const { title, price, image } = cartItem;

  function removeItem() {
    dispatch(removeFromCart(cartItem.id))
  }

  return (
    <div className="flex gap-4 items-center p-4">
      <div className="flex gap-4 bg-blue-950 p-6 text-white rounded-xl text-sm">
        <img src={image} alt={title} className="w-16 h-16 rounded-lg" />
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-orange-500 text-md font-bold">${price}</p>
          <button onClick={removeItem} className="bg-red-600 p-2.5 rounded-md font-semibold w-[120px] self-end">Remove Item</button>
        </div>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  cartItem: PropTypes.object.isRequired,
};
