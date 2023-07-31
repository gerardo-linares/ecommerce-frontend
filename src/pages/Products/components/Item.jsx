import { Link } from "react-router-dom";

const Item = ({ product }) => {
  const { id, title, category, thumbnails, price } = product;

  return (
    <div className="max-w-sm mx-auto rounded-lg overflow-hidden   bg-white  shadow-lg hover:shadow-3xl transition duration-150 ease-out hover:ease-in">
      <a className="block relative h-48">
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-full"
          src={thumbnails}
        />
      </a>
      <div className="p-4">
        <h3 className="text-gray-500 text-xs tracking-widest mb-1">
          {category}
        </h3>
        <h2 className="text-gray-900  font-medium mb-2">{title}</h2>
        <p className="text-gray-600  font-semibold mb-2 ">${price}</p>
        <Link
          to={`/product/${id}`}
          className="text-color_button flex justify-center items-center text-sm"
        >
          Ver detalle
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Item;
