import Item from "./Item";

const ItemList = ({ products, user }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <Item key={product.id} product={product} user={user} />
      ))}
    </div>
  );
};

export default ItemList;
