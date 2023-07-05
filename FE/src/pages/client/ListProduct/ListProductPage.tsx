import { GoHome } from "react-icons/go";
import { AiOutlineRight } from "react-icons/ai";

import { Container, FilterProduct, ProductList } from "../../../components";

import { products } from "../../../data/products";
import { categories } from "../../../data/categories";

const ListProductPage = () => {
  return (
    <>
      <div className="py-3">
        <div className="px-10 pb-5 flex items-center gap-1 border-b">
          <GoHome className="text-rose-400 text-base" size={20} />

          <span className="text-sm text-gray-400">
            <AiOutlineRight />
          </span>

          <p className="text-gray-600 font-semibold text-lg">Sản phẩm</p>
        </div>

        <Container>
          <div className="flex gap-3 pt-5">
            <div className="col-span-1 bg-white px-4 pb-6 shadow-2xl rounded-xl overflow-hidden w-1/3">
              <div className="divide-y divide-gray-200 space-y-5">
                <FilterProduct categories={categories} />
              </div>
            </div>

            <div className="col-span-3">
              <select className="w-44 text-sm text-gray-600 px-4 py-3 border-gray-300 shadow-2xl rounded-xl focus:ring-rose-500 focus:border-rose-500 mb-3 outline-none">
                <option value="default">Mặc định</option>
                <option value="newest">Sản phẩm mới</option>
                <option value="esc">Giá từ thấp đến cao</option>
                <option value="desc">Giá từ cao đến thấp</option>
              </select>

              <div className="shadow-2xl rounded-xl">
                <ProductList products={products} />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ListProductPage;
