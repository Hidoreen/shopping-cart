import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartCard from "../components/cart-card";

export default function Cart() {
  const [totalCart, setTotalCart] = useState(0);

  const { cart } = useSelector((state) => state);

  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  console.log(cart, totalCart);
  return (
    <div>
      {cart && cart.length > 0 ? (
        <>
          <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 mx-auto max-w-6xl">
            <div className="flex flex-col">
              {cart.map((cartItem) => (
                <CartCard key={cartItem.id} cartItem={cartItem} />
              ))}
            </div>
            <div>
              <div className="flex flex-col items-end p-5 mt-4 space-y-5">
                <h1 className="text-lg font-semibold text-blue-900">Your Cart Summary</h1>
                <p>
                <span className="font-lg text-gray-800 tracking-wide">Total Item: </span>
                <span className="font-bold text-orange-500">{cart.length}</span>
                </p>
                <p>
                <span className="font-lg text-gray-800 tracking-wide">Total Amount: </span>
                <span className="font-bold text-md text-orange-500">USD: {totalCart}</span>
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="container mx-auto min-h-[80vh] flex flex-col gap-4 justify-center items-center">
          <h1 className="font-semibold tracking-wide">Your Cart is Empty</h1>
          <button className="bg-blue-900 text-white font-semibold text-lg rounded-md px-4 py-3">
            <Link to={"/"}> SHOP NOW </Link>
          </button>
        </div>
      )}
    </div>
  );
}
