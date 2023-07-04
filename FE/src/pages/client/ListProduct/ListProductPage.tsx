import { GoHome } from "react-icons/go";
import { AiOutlineRight } from "react-icons/ai";

import Container from "../../../components/client/Container";
import ProductList from "../../../components/client/Product/ProductList";
import FilterProduct from "../../../components/client/Product/FilterProduct";

import { products } from "../../../data/products";
import { categories } from "../../../data/categories";

const ListProductPage = () => {
  return (
    <>
      <div className="bg-[#ebebf0] py-3">
        <Container>
          <div className="py-4 flex items-center gap-1">
            <GoHome className="text-rose-500 text-base" size={30} />

            <span className="text-sm text-gray-400">
              <AiOutlineRight />
            </span>

            <p className="text-gray-600 font-medium">Shop</p>
          </div>

          <div className="flex gap-3">
            <div className="col-span-1 bg-white px-4 pb-6 shadow rounded-xl overflow-hidden w-1/3">
              <div className="divide-y divide-gray-200 space-y-5">
                <FilterProduct categories={categories} />
              </div>
            </div>

            <div className="col-span-3">
              <select className="w-44 text-sm text-gray-600 px-4 py-3 border-gray-300 shadow-sm rounded-xl focus:ring-rose-500 focus:border-rose-500 mb-3 outline-none">
                <option value="default">Mặc định</option>
                <option value="newest">Sản phẩm mới</option>
                <option value="esc">Giá từ thấp đến cao</option>
                <option value="desc">Giá từ cao đến thấp</option>
              </select>

              <ProductList products={products} />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ListProductPage;
