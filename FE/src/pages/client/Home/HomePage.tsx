import Container from "../../../components/client/Container";
import ProductList from "../../../components/client/Product/ProductList";

import { products } from "../../../data/products";

const HomePage = () => {
  const phone = products.filter(
    (product) => product.category.slug === "Điện thoại"
  );

  const computer = products.filter(
    (product) => product.category.slug === "Máy tính sách tay"
  );

  const watch = products.filter(
    (product) => product.category.slug === "Đồng hồ"
  );

  return (
    <>
      <Container>
        <ProductList title="Điện thoại nổi bật nhất" products={phone} />
        <ProductList title="Máy tính nổi bật nhất" products={computer} />

        <ProductList title="Đồng hồ nổi bật nhất" products={watch} />
      </Container>
    </>
  );
};

export default HomePage;
