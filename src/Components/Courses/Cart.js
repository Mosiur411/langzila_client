import React from "react";
import CartItems from "./CartItem";
import TotalItems from "./TotalItems";
import TotalPrice from "./TotalPrice";
import { useSelector } from 'react-redux';
import Navbar from "../Home/Navbar/Navbar";
import { useNavigate } from "react-router-dom";

function Cart() {
  const cart = useSelector((state) => state.courses);
  const { carts, totalItem, totalPrice } = cart;
  const navigate = useNavigate();

  return (
    <>
      <Navbar></Navbar>
      <h2 className='text-4xl font-bold text-accent text-center pt-5 pb-2'>Cart</h2>
      <p className='text-center lg:w-[800px] mb-10 mx-auto'>All Orders</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 my-24">
        <div className="bg-white py-4 px-8 shadow-md rounded-lg mx-4 col-span-2">
          <h1 className="text-2xl font-bold text-accent mb-2">Your Order</h1>
          {carts?.length ?
            <div>
              {carts.map((cart) => (
                <CartItems
                  key={cart.id}
                  cart={cart}
                />
              ))}
            </div>
            :
            <div>
              <p className='text-center mt-12 mb-8 font-bold'>Your Cart is empty</p>
            </div>

          }
          <button onClick={() => navigate("/courses")} className="px-4 py-2 bg-primary text-white rounded-lg font-bold mx-auto mt-2">Return To Purchase</button>
        </div>
        <div className="">
          <h1 className="text-2xl font-bold px-4 text-accent pt-12 lg:pt-0">Cart Total</h1>
          <TotalItems totalItem={totalItem} />
          <TotalPrice totalPrice={totalPrice} />
          <div class="card-actions justify-end">
            <button className="px-4 py-2 bg-primary text-white rounded-lg font-bold mx-auto">Proceed To Checkout</button>
          </div>
        </div>

      </div>
    </>
  );
}

export default Cart;
