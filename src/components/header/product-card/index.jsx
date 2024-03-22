import React from "react";
import PropTypes from "prop-types";
import { addToCart, removeFromCart } from "../../../store/slice-cart/cart-slice";
import {useDispatch, useSelector} from 'react-redux'

const ProductCard = ({ product }) => {

  const dispatch = useDispatch()

  const {cart} = useSelector(state => state);
  
  function handleClick() {
    dispatch(addToCart(product))
  }

  function handleRemoveItem() {
    dispatch(removeFromCart(product.id));
  }


  return (
    <div className="flex flex-col items-center border-2 border-blue-500 gap-4 m-10 h-[380px] overflow-hidden  p-4 rounded-md">
      <div className="h-[180px]">
        <img
          src={product?.image}
          alt={product?.title}
          className="object-cover w-full h-full"
        />
      </div>
      <div>
        <h1 className="w-40 truncate mt-2 font-bold text-lg">
          {product.title}
        </h1>
        <p className="mt-2 text-orange-500">USD {product.price}</p>
      </div>
      <div className="flex items-center w-full justify-center">
        <button onClick={ cart.some(item => item.id === product.id) ? handleRemoveItem : handleClick } className="bg-blue-900 text-white font-semibold text-lg rounded-md px-4 py-3">
          {
            cart.some(item => item.id === product.id) ? 'Remove from cart' : 'Add to cart'
          }
        </button>
      </div> 
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.any.isRequired,
};

export default ProductCard;
