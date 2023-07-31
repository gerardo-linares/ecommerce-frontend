import React, { useEffect } from "react";
import CartItem from "./CartItem";
import {
  deleteAllProducts,
  getCartById,
} from "../../../../services/cartService";
import { useAppDispatch, useAppSelector } from "../../../../hooks/store";
import {
  removeAllProductsInCart,
  updateCart,
} from "../../../../redux/states/cart";

const CartList = () => {
  const dispatch = useAppDispatch();
  const { cart: cartId } = useAppSelector((state) => state.user);

  const cart = useAppSelector((state) => state.cart);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getCartById(cartId);

        dispatch(updateCart(response.payload));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const deleteProducts = async () => {
    await deleteAllProducts(cartId);
    dispatch(removeAllProductsInCart());
  };

  return (
    <div className="m-10 p-5 bg-slate-50 shadow-lg">
      {cart.loading ? (
        <p>Cargando...</p>
      ) : cart.products ? ( // Asegurar que cart.products esté definido antes de mapear
        cart.products.map((cartItem) => (
          <CartItem key={cartItem.product._id} product={cartItem.product} />
        ))
      ) : (
        <p>El carrito está vacío.</p>
      )}
      <div className="text-end pr-10 pt-10">
        <button onClick={deleteProducts} className="text-red-600 font-bold">
          Vaciar Carrito
        </button>
      </div>
    </div>
  );
};

export default CartList;
