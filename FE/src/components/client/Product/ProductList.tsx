import ProductCard from "./ProductCard";

type Props = {
  title?: string;
  products: any[];
};

const ProductList = ({ title, products }: Props) => {
  return (
    <>
      <div className="space-y-4">
        {title && (
          <div className="flex flex-row justify-between">
            <h3 className="font-bold text-3xl pt-10 uppercase">{title}</h3>

            <h4 className="font-md text-md pt-10 hover:text-rose-500">
              Xem thêm
            </h4>
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
