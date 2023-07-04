import Container from "../../../components/client/Container";
import ProductList from "../../../components/client/Product/ProductList";

import { products } from "../../../data/products";

const HomePage = () => {
  return (
    <>
      <Container>
        <ProductList title="Điện thoại nổi bật nhất" products={products} />
        <ProductList title="Máy tính nổi bật nhất" products={products} />
      </Container>
    </>
  );
};

export default HomePage;
