import { Tabs } from "antd";
import type { TabsProps } from "antd";
import { useParams } from "react-router-dom";

import {
  Container,
  ProductComment,
  ProductDescription,
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

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: (
        <>
          <div className="text-black text-xl">Thông tin sản phẩm</div>
        </>
      ),
      children: <ProductDescription />,
    },
    {
      key: "2",
      label: (
        <>
          <div className="text-black text-xl">Bình luận sản phẩm</div>
        </>
      ),
      children: product && product.comments.length > 0 && (
        <ProductComment comments={product.comments} />
      ),
    },
  ];

  return (
    <>
      <Container>
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col gap-6">
            <ProductInfo product={product} />

            <ProductList products={productSimilar} title="Sản phẩm cùng loại" />

            <div className="bg-white rounded-xl p-5">
              <Tabs
                defaultActiveKey="1"
                tabPosition="top"
                items={items}
                size="large"
                type="card"
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProductDetailPage;
