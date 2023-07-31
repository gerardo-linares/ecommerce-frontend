import React from "react";
import Counter from "../../../../components/Counter/Counter";
import { GoTrash } from "react-icons/go";
import { useAppDispatch, useAppSelector } from "../../../../hooks/store";
import { updateCart } from "../../../../redux/states/cart";
import { deleteProductFromCart } from "../../../../services/cartService";
const CartItem = ({ product }) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const cartId = user.cart;

  const { _id, title, thumbnails, price, stock, status, category } = product;
  const quantity = 1;
  const deleteProduct = async () => {
    const response = await deleteProductFromCart(cartId, _id, quantity);
    console.log(response);
    dispatch(updateCart(response));
  };
  return (
    <div className="flex items-center justify-between border-b py-4 shadow-lg">
      <div className="flex items-center space-x-4 ">
        <img
          src={thumbnails}
          alt={title}
          className="w-16 h-16 object-contain p-1 mx-5 rounded-lg"
        />
        <div>
          <h3 className="font-medium text-gray-800">{title}</h3>
          <p className="text-gray-600">{category}</p>
        </div>
      </div>
      <div>
        <h3 className="font-medium text-gray-800">Precio:${price}</h3>
        <p className="text-gray-600">${price}</p>
      </div>
      <div className="flex justify-end gap-2">
        <Counter />
        <button className=" text-xl text-red-600  px-2 rounded ">
          <GoTrash onClick={deleteProduct} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
