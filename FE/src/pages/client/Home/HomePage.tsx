import Container from "../../../components/client/Container";
import Features from "../../../components/client/Home/Features";
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
        <Features />

        {phone && phone.length > 0 && (
          <ProductList title="Điện thoại nổi bật nhất" products={phone} />
        )}

        {computer && computer.length > 0 && (
          <ProductList title="Máy tính nổi bật nhất" products={computer} />
        )}

        {watch && watch.length > 0 && (
          <ProductList title="Đồng hồ nổi bật nhất" products={watch} />
        )}
      </Container>
    </>
  );
};

export default HomePage;
