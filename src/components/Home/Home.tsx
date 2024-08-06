import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductType } from "../../types";
import { Layout } from "../common/Layout";
import { Error } from "../common/Error";
import Banner from "../common/Banner";
import Filter from "../Filter/Filter";
import Products from "../Products/Products";
import Spinner from "../common/Spinner";

const Home = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const activeFilters: Array<string> =
    searchParams.get("categories")?.split(",") || [];

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  const categories = products.map((product) => product.category);
  const uniqueCategories = [...new Set(categories)];

  const filteredProducts = products.filter((product) => {
    if (activeFilters.length === 0) {
      return true;
    }
    return activeFilters.includes(product.category);
  });

  return (
    <Layout>
      <main className="px-4 md:px-6 max-w-[1800px] mt-16 mx-auto">
        {error ? (
          <div className="pt-4, md:pt-6">
            <Error />
          </div>
        ) : (
          <>
            <Banner
              title="STOOR"
              description="Lorem ipsum dolor sit amet consectetur. Nullam leo condimentum
            turpis aliquet. Fermentum purus amet vitae sed nam imperdiet. Sit
            cursus sed commodo aliquet ultricies mi volutpat tortor at. A
            gravida enim ut quis et in lectus. Dolor tortor facilisi egestas
            faucibus nulla. Nibh accumsan felis tempor convallis nunc porta
            integer."
            />
            <div className="flex flex-col items-center lg:items-start lg:flex-row">
              <div className="min-w-40">
                <Filter categories={uniqueCategories} />
              </div>

              {loading ? (
                <div className="flex my-[250px] mx-auto">
                  <Spinner />
                </div>
              ) : (
                <Products filteredProducts={filteredProducts} />
              )}
            </div>
          </>
        )}
      </main>
    </Layout>
  );
};

export default Home;
