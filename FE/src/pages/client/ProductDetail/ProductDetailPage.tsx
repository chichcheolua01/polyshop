import { useParams } from "react-router-dom";

import {
  Container,
  ProductComment,
  ProductInfo,
  ProductList,
} from "../../../components";

import { products } from "../../../data/products";

const ProductDetailPage = () => {
  const { id } = useParams<string>();

  const product = products.find((prod) => prod._id === id);

  const productSimilar = products.filter(
    (prod) => prod.category._id === product?.category._id
  );

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
