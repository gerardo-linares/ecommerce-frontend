import React, { useEffect, useState } from "react";
import {
  saveProducts,
  setCategory,
  setSort,
} from "../../../redux/states/product";
import { getProducts } from "../../../services/productService";
import ItemList from "./ItemList";
import { useAppDispatch, useAppSelector } from "../../../hooks/store";

const ItemListContainer = () => {
  const dispatch = useAppDispatch();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSort, setSelectedSort] = useState("asc");
  const products = useAppSelector((state) => state.product.products);
  const user = useAppSelector((state) => state.user);

  useEffect(() => {
    fetchData(selectedCategory, selectedSort);
  }, [selectedCategory, selectedSort]);

  const fetchData = async (category, sort) => {
    try {
      const data = await getProducts(0, category, sort, 10);
      dispatch(saveProducts(data));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setSelectedCategory(selectedCategory);
    dispatch(setCategory(selectedCategory));
  };

  const handleSortChange = (event) => {
    const selectedSort = event.target.value;
    setSelectedSort(selectedSort);
    dispatch(setSort(selectedSort));
  };

  return (
    <>
      <section className="flex justify-end items-center container gap-4">
        <div>
          <label htmlFor="category">Categoría:</label>
          <select
            className="text-gray-500"
            id="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="" className="text-gray-500">
              Todas
            </option>
            <option value="Hombre" className="text-gray-500">
              Hombre
            </option>
            <option value="Mujer" className="text-gray-500">
              Mujer
            </option>
            <option value="Niños" className="text-gray-500">
              Niños
            </option>
          </select>
        </div>
        <div>
          <label htmlFor="sort">Precio:</label>
          <select
            id="sort"
            value={selectedSort}
            onChange={handleSortChange}
            className="text-gray-500"
          >
            <option value="asc" className="text-gray-500">
              Menor
            </option>
            <option value="desc" className="text-gray-500">
              Mayor
            </option>
          </select>
        </div>
      </section>
      <section className="w-3/4 mx-auto mt-14">
        <ItemList products={products} user={user} />
      </section>
    </>
  );
};

export default ItemListContainer;
