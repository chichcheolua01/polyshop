import { IProduct } from "../../../interface/product";

type ProductInfoProps = {
  product?: IProduct;
};

const ProductInfo = ({ product }: ProductInfoProps) => {
  return <>{product?.image}</>;
};

export default ProductInfo;
