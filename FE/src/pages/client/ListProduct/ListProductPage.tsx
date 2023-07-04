import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Container from "../../../components/client/Container";
import ProductList from "../../../components/client/Product/ProductList";
import FilterProduct from "../../../components/client/Product/FilterProduct";

import { products } from "../../../data/products";
import { useParams } from "react-router-dom";

import { categories } from "../../../data/categories";

const ListProductPage = () => {
  const { slug } = useParams();
  const location = useLocation();
  const [value, setValue] = useState("");

  const filterSlug = [...new Set(categories.map((category) => category.slug))];

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    const category = params.get("category");

    if (category) {
      setValue(category);
    }
  }, [location.search, setValue]);

  return (
    <>
      <div className="bg-[#ebebf0] py-3">
        <Container>
          <div className="flex flex-col md:flex-row gap-3">
            <FilterProduct
              searchSlug={slug}
              searchValue={value}
              filterSlug={filterSlug}
              categories={categories}
            />

            <div className="bg-white rounded-xl p-3">
              <div className="py-5">top</div>

              <ProductList products={products} />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ListProductPage;
