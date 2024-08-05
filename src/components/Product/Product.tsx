import Typography from "@mui/material/Typography";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ProductType } from "../../types";
import { Layout } from "../common/Layout";
import { Error } from "../common/Error";

import { Rating } from "../common/Rating";
import CheckboxIcon from "../common/CheckboxIcon";
import Spinner from "../common/Spinner";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

// TODO: have the select option required before it can be added to the cart
// TODO: show "go to cart" button after user adds item to cart

const Product = () => {
  const [product, setProduct] = useState<ProductType | undefined>();
  const [bagMsg, setBagMsg] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { id } = useParams();

  const productDetails = [
    { section: "Description", content: product?.description },
    {
      section: "Product Rating",
      content: (
        <Rating rate={product?.rating.rate} count={product?.rating.count} />
      ),
    },
    { section: "Delivery Options", content: "WIP" },
  ];

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [id]);

  const handleClick = () => {
    const reqBody = { products: [{ productId: id, quantity: 1 }] };

    axios.post("https://fakestoreapi.com/carts", reqBody).then(() => {
      setBagMsg(true);
      // TODO: hide message after a few seconds
      // TODO: store cart in local storage
    });
  };

  return (
    <Layout>
      {error ? (
        <main className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <Error />
        </main>
      ) : (
        <main>
          {bagMsg && (
            <div className="flex row bg-green-500 absolute top-[98px] left-0 right-0 p-4 z-50 justify-center items-center">
              <CheckboxIcon />
              <Typography sx={{ marginLeft: "1rem", fontSize: "14px" }}>
                Thank you, {product?.title} has been added to your bag!
              </Typography>
            </div>
          )}

          {loading ? (
            <div className="flex justify-center items-center h-screen w-screen">
              <Spinner />
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row flex-1 min-h-screen">
              <div className="flex justify-center items-center py-0 px-4 mt-32 mr-0 mb-4 ml-0 md: m-0 flex-1 md:h-screen relative">
                {product && product?.rating.rate >= 4 ? (
                  <p className="border-solid border-slate-300 border rounded-full absolute right-[10px] top-0 md:right-[18px] md:top-[118px]  py-[5px] px-[24px] text-[14px] font-semibold text-[capitalize]">
                    Highly Rated
                  </p>
                ) : null}
                <div className="mt-[60px] mr-1 mb-1 ml-1">
                  <img
                    src={product?.image}
                    alt={product?.description}
                    className="w-full max-w-[350px]"
                  />
                </div>
              </div>

              <div className="flex flex-1 bg-gray-100 h-screen justify-center items-center p-4 md:p-8">
                <div className="min-w-[300px] max-w-[500px]">
                  <h1 className="text-2xl font-bold tracking-tight text-gray-900 mb-16">
                    {product?.title}
                  </h1>
                  <div mt-1>
                    <label
                      htmlFor="size"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      SELECT SIZE
                    </label>
                    <select
                      id="size"
                      name="size"
                      defaultValue="SMALL"
                      className="mt-2 block w-full rounded-md border-0 py-5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      <option>SMALL</option>
                      <option>MEDIUM</option>
                      <option>LARGE</option>
                    </select>
                  </div>

                  <button
                    type="button"
                    className="bg-black mt-4 w-full h-16 text-white rounded-md"
                    onClick={handleClick}
                  >
                    ADD TO BAG
                  </button>

                  <div className="divide-y divide-gray-200 border-t mt-10 max-w-full">
                    {productDetails &&
                      productDetails.map((detail) => (
                        <Disclosure key={detail.section} as="div">
                          <h3>
                            <DisclosureButton className="group relative flex w-full items-center justify-between py-6 text-left">
                              <span className="text-sm font-medium text-gray-900 uppercase">
                                {detail.section}
                              </span>
                              <span className="ml-6 flex items-center">
                                <PlusIcon
                                  aria-hidden="true"
                                  className="block h-6 w-6 text-gray-400 group-hover:text-gray-500 group-data-[open]:hidden"
                                />
                                <MinusIcon
                                  aria-hidden="true"
                                  className="hidden h-6 w-6 text-indigo-400 group-hover:text-indigo-500 group-data-[open]:block"
                                />
                              </span>
                            </DisclosureButton>
                          </h3>
                          <DisclosurePanel className="prose prose-sm pb-6">
                            <ul role="list">{detail.content}</ul>
                          </DisclosurePanel>
                        </Disclosure>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      )}
    </Layout>
  );
};

export default Product;
