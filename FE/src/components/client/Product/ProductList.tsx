import { IProduct } from "../../../interface/product";
import ProductCard from "./ProductCard";

type ProductListProps = {
  title?: string;
  products: IProduct[];
};

const ProductList = ({ title, products }: ProductListProps) => {
  return (
    <>
      <div className="space-y-4 border rounded-xl p-3 mb-16 bg-white shadow-xl">
        {title && (
          <div className="flex flex-row justify-between">
            <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
              {title}
            </h2>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
