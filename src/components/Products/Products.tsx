import { NavLink } from "react-router-dom";
import { ProductType } from "../../types/index.ts";
import { Rating } from "../common/Rating";
import { formatPrice } from "../../utils/formatPrice.ts";

interface Props {
  filteredProducts: ProductType[];
}

const Products = ({ filteredProducts }: Props) => {
  return (
    <div className="flex-1">
      <div className="px-4 py-16 sm:px-6 sm:py-10 lg:px-8 lg:ml-8">
        <div className="mt-1 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:gap-x-8 xl:grid-cols-3 xl:gap-x-10 2xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="relative flex flex-col h-full">
              <div>
                <img
                  alt={product.description}
                  src={product.image}
                  className="aspect-square object-contain"
                />
              </div>
              <div className="mt-4 flex justify-between gap-4 flex-grow">
                <h3 className="text-sm text-gray-700">
                  <NavLink to={`product/${product.id}`}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.title}
                  </NavLink>
                </h3>
                <span className="text-sm font-medium text-gray-900">
                  £{formatPrice(product.price)}
                </span>
              </div>
              <div className="flex items-center mt-3">
                <Rating
                  rate={product.rating.rate}
                  count={product.rating.count}
                />
              </div>
              <NavLink
                to={`product/${product.id}`}
                className="relative flex items-center justify-center rounded-md border border-transparent bg-black px-8 py-2 text-sm font-medium text-white hover:bg-gray-500 mt-4"
              >
                VIEW PRODUCT
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
