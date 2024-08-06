import { useEffect, useState } from "react";
import axios from "axios";
import { Layout } from "../common/Layout";
import { Error } from "../common/Error";
import { ProductType } from "../../types";
import Spinner from "../common/Spinner";
import { NavLink } from "react-router-dom";

type UserProductType = {
  productId: number;
  quantity: number;
};

// TODO: add "delete" icon button so user can remove item from cart

const Cart = () => {
  const [userProducts, setUserProducts] = useState<UserProductType[]>([]);
  const [allProducts, setAllProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    const randomCartNumber = Math.floor(Math.random() * 7) + 1;
    axios
      .get(`https://fakestoreapi.com/carts/${randomCartNumber}`)
      .then((res) => setUserProducts(res.data.products))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setAllProducts(response.data);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  const allUserProductsInfo = userProducts.map((userProduct) => {
    const findProduct = allProducts.filter(
      (product) => product.id === userProduct.productId
    );

    return { ...userProduct, info: findProduct };
  });

  const rows = allUserProductsInfo.map((productInfo) => {
    const productDetails = productInfo.info[0];
    return {
      name: productDetails.title,
      price: productDetails.price,
      quantity: productInfo.quantity,
      image: productDetails.image,
    };
  });

  return (
    <Layout>
      <div className="px-4 md:px-6 max-w-7xl mx-auto mt-16">
        {error ? (
          <div className="pt-4 md:pt-6">
            <Error />
          </div>
        ) : loading ? (
          <div className="flex justify-center items-center h-70vh w-full">
            <Spinner />
          </div>
        ) : (
          <>
            <h1 className="text-2xl font-semibold text-center mb-8 mt-24">
              Your Cart
            </h1>

            <form className="mt-12">
              <section aria-labelledby="cart-heading">
                <h2 id="cart-heading" className="sr-only">
                  Items in your shopping cart
                </h2>

                <ul
                  role="list"
                  className="divide-y divide-gray-200 border-b border-t border-gray-200"
                >
                  {rows.map((product) => (
                    <li key={product.name} className="flex py-6">
                      <div className="flex-shrink-0">
                        <img
                          alt={product.name}
                          src={product.image}
                          className="h-24 w-24 rounded-md object-cover object-center sm:h-32 sm:w-32"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col sm:ml-6">
                        <div>
                          <div className="flex justify-between">
                            <h4 className="text-sm">{product.name}</h4>
                            <p className="ml-4 text-sm font-medium text-gray-900">
                              £{product.price}
                            </p>
                          </div>
                        </div>

                        <div className="mt-4 flex flex-1 items-end justify-between">
                          <div className="ml-4">
                            <button
                              type="button"
                              className="text-sm font-medium text-slate-400 hover:text-indigo-500"
                              onClick={() =>
                                alert("remove not implemented yet!")
                              }
                            >
                              <span>Remove</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Order summary */}
              <section aria-labelledby="summary-heading" className="mt-10">
                <div className="mt-10">
                  <button
                    type="submit"
                    className="w-full rounded-md border border-transparent bg-black px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                    onClick={() => alert("checkout not implemented yet!")}
                  >
                    Checkout
                  </button>
                </div>

                <div className="mt-6 text-center text-sm">
                  <p>
                    or{" "}
                    <NavLink
                      to="/"
                      className="font-medium text-slate-500 hover:text-indigo-500"
                    >
                      Continue Shopping
                      <span aria-hidden="true"> &rarr;</span>
                    </NavLink>
                  </p>
                </div>
              </section>
            </form>
          </>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
