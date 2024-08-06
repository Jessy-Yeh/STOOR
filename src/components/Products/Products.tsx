// import { Rating } from "@mui/material";
import { NavLink } from "react-router-dom";
import { ProductType } from "../../types/index.ts";
import { Rating } from "../common/Rating";

interface Props {
  filteredProducts: ProductType[];
}

const Products = ({ filteredProducts }: Props) => {
  return (
    <div className="flex-1">
      <div className="px-4 py-16 sm:px-6 sm:py-10 lg:px-8 lg:ml-8">
        <div className="mt-1 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 md:gap-x-8 xl:grid-cols-3 xl:gap-x-10 2xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md  lg:aspect-none group-hover:opacity-75 lg:h-80 flex justify-center">
                <img
                  alt={product.description}
                  src={product.image}
                  className="h-full max-w-full object-cover object-center "
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <NavLink to={`product/${product.id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}
                    </NavLink>
                  </h3>
                  <div className="flex items-center mt-4">
                    <Rating
                      rate={product.rating.rate}
                      count={product.rating.count}
                    />
                  </div>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
              <NavLink
                to={`product/${product.id}`}
                className="relative flex items-center justify-center rounded-md border border-transparent bg-black px-8 py-2 text-sm font-medium text-white hover:bg-gray-200  mt-4"
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
