import ProductCard from "./ProductCard";

import { IProduct, IUser } from "../../../../interface";

type ProductListProps = {
  title?: string;
  products: IProduct[] | null;
  currentUser?: IUser | null;
};

const ProductList = ({ title, products, currentUser }: ProductListProps) => {
  return (
    <>
      <div className="space-y-4 rounded-xl p-5 mb-16 bg-white">
        {title && (
          <div className="flex flex-row justify-between">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">{title}</h2>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-7 gap-y-10">
          {products &&
            products.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
                currentUser={currentUser}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
