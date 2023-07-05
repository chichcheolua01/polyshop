import { useParams } from "react-router-dom";

import {
  Container,
  ProductComment,
  ProductInfo,
  ProductList,
} from "../../../components";

import { IProduct } from "../../../interface";

type ProductDetailPageProps = {
  listProducts: IProduct[] | null;
};

const ProductDetailPage = ({ listProducts }: ProductDetailPageProps) => {
  const { id } = useParams<string>();

  const product = listProducts && listProducts.find((prod) => prod._id === id);

  const productSimilar =
    listProducts &&
    listProducts.filter((prod) => prod.category._id === product?.category._id);

  return (
    <>
      <Container>
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col gap-6">
            <ProductInfo product={product} />

            <ProductList products={productSimilar} title="Sản phẩm cùng loại" />

            <ProductComment />
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProductDetailPage;
