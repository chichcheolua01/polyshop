import Container from "../../../components/client/Container";
import ProductList from "../../../components/client/Product/ProductList";

import { products } from "../../../data/products";

const HomePage = () => {
  const phone = products.filter(
    (product) => product.category.slug === "Điện thoại"
  );

  const computer = products.filter(
    (product) => product.category.slug === "Máy tính"
  );

  return (
    <>
      <Container>
        <ProductList title="Điện thoại nổi bật nhất" products={phone} />
        <ProductList title="Máy tính nổi bật nhất" products={computer} />
      </Container>
    </>
  );
};

export default HomePage;
