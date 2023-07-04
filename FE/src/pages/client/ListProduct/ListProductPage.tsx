import Container from "../../../components/client/Container";
import ProductList from "../../../components/client/Product/ProductList";
import FilterProduct from "../../../components/client/Product/FilterProduct";

import { products } from "../../../data/products";
import { categories } from "../../../data/categories";

const ListProductPage = () => {
  const filterSlug = [...new Set(categories.map((category) => category.slug))];

  return (
    <>
      <div className="bg-[#ebebf0] py-3">
        <Container>
          <div className="flex flex-col md:flex-row gap-3">
            <FilterProduct filterSlug={filterSlug} categories={categories} />

            <div className="bg-white rounded-xl p-3">
              <div className="pb-5 border-b mb-5">
                <h2 className="text-2xl font-semibold">Danh Sách Sản Phẩm</h2>

                <div className="mt-5 text-base font-normal flex flex-row gap-10">
                  <button className="hover:text-rose-500">Phổ biến</button>

                  <button className="hover:text-rose-500">Bán chạy</button>

                  <button className="hover:text-rose-500">Hàng mới</button>

                  <button className="hover:text-rose-500">
                    Giá từ thấp đến cao
                  </button>

                  <button className="hover:text-rose-500">
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
