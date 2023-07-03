import ProductCard from "./ProductCard";

type Props = {
  title: string;
  products: any[];
};

const ProductList = ({ title, products }: Props) => {
  return (
    <>
      <div className="space-y-4">
        <h3 className="font-bold text-3xl pt-10 uppercase">{title}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
