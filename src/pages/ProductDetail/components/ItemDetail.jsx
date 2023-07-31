import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/store";
import { addProductToCart } from "../../../services/cartService";
import { saveCart } from "../../../redux/states/cart";

const ItemDetail = ({ product }) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  const { _id, title, category, thumbnails, price, description } = product;

  const handleAddToCart = async () => {
    const response = await addProductToCart(user.cart, _id);
    console.log(response);
    dispatch(saveCart(response));
  };

  return (
    <section className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border border-gray-200 rounded-lg">
        <div className="flex justify-center items-center">
          <img
            alt="ecommerce"
            className="object-cover object-center"
            src={thumbnails}
          />
        </div>
        <div className="p-6 flex flex-col justify-center gap-5">
          <h2 className="text-gray-900 text-2xl font-medium mb-2">{title}</h2>
          <h3 className="text-gray-500 text-xs tracking-widest mb-4">
            {category}
          </h3>
          <p className="text-gray-700 text-lg mb-4">${price}</p>
          <p className="text-gray-600">{description}</p>
          <div className="flex justify-end items-center mt-6 gap-2">
            <Link
              to={`/products/${category}`}
              className="px-4 py-2 hover:bg-hover_button bg-slate-400 text-white rounded-lg"
            >
              Volver
            </Link>

            <button
              onClick={handleAddToCart}
              className="px-4 py-2 hover:bg-hover_button text-white bg-color_button rounded-lg"
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemDetail;
