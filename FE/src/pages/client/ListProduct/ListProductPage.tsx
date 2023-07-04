import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Container from "../../../components/client/Container";
import ProductList from "../../../components/client/Product/ProductList";
import FilterProduct from "../../../components/client/Product/FilterProduct";

import { products } from "../../../data/products";
import { categories } from "../../../data/categories";

const ListProductPage = () => {
  const { slug } = useParams();
  const location = useLocation();
  const [categorySearch, setCategorySearch] = useState("");
  const [sortSearch, setSortSearch] = useState("");

  const navigate = useNavigate();

  const filterSlug = [...new Set(categories.map((category) => category.slug))];

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    const category = params.get("category");
    const sort = params.get("sort");

    if (category) {
      setCategorySearch(category);
    }

    if (sort) {
      setSortSearch(sort);
    }
  }, [location.search, setCategorySearch, setSortSearch]);

  const changeUrl = (
    slug: string | undefined,
    category: string,
    sort: string
  ) => {
    const params = new URLSearchParams(location.search);

    if (sort) {
      params.set("sort", sort);
    }

    if (category) {
      params.set("category", category);
    }

    const newPath = `/list-product/${slug}?${params.toString()}`;

    navigate(newPath);
  };

  return (
    <>
      <div className="bg-[#ebebf0] py-3">
        <Container>
          <div className="flex flex-col md:flex-row gap-3">
            <FilterProduct
              searchSlug={slug}
              searchSort={sortSearch}
              searchCategory={categorySearch}
              filterSlug={filterSlug}
              categories={categories}
              updateURL={changeUrl}
            />

            <div className="bg-white rounded-xl p-3">
              <div className="pb-5 border-b mb-5">
                <h2 className="text-2xl font-semibold">{slug}</h2>

                <div className="mt-5 text-base font-normal flex flex-row gap-10">
                  <button
                    className="hover:text-rose-500"
                    onClick={() => changeUrl(slug, categorySearch, "default")}
                  >
                    Phổ biến
                  </button>

                  <button
                    className="hover:text-rose-500"
                    onClick={() =>
                      changeUrl(slug, categorySearch, "top_seller")
                    }
                  >
                    Bán chạy
                  </button>

                  <button
                    className="hover:text-rose-500"
                    onClick={() => changeUrl(slug, categorySearch, "newest")}
                  >
                    Hàng mới
                  </button>

                  <button
                    className="hover:text-rose-500"
                    onClick={() => changeUrl(slug, categorySearch, "esc")}
                  >
                    Giá từ thấp đến cao
                  </button>

                  <button
                    className="hover:text-rose-500"
                    onClick={() => changeUrl(slug, categorySearch, "desc")}
                  >
                    Giá từ cao đến thấp
                  </button>
                </div>
              </div>

              <ProductList products={products} />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ListProductPage;
