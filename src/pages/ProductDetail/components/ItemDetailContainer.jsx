import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/store";
import { getProductById } from "../../../services/productService";
import { updateProducts } from "../../../redux/states/product";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const dispatch = useAppDispatch();
  const { productId } = useParams();
  const product = useAppSelector((state) =>
    state.product.products.find((p) => p.id === productId)
  );

  useEffect(() => {
    fetchData(productId);
  }, [productId]);

  const fetchData = async (id) => {
    try {
      const productData = await getProductById(id);

      dispatch(updateProducts(productData));
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  if (!product) {
    return <p>Cargando producto...</p>;
  }

  return (
    <div>
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer;
