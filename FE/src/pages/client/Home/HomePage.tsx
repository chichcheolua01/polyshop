import {
  Banner,
  Container,
  Features,
  Offer,
  ProductList,
} from "../../../components";

import { IProduct, IUser } from "../../../interface";

type HomePageProps = {
  currentUser: IUser | null;
  listProducts: IProduct[] | null;
};

const HomePage = ({ currentUser, listProducts }: HomePageProps) => {
  const phone =
    listProducts &&
    listProducts.filter((product) => product.category.slug === "Điện thoại");

  const computer =
    listProducts &&
    listProducts.filter(
      (product) => product.category.slug === "Máy tính sách tay"
    );

  const watch =
    listProducts &&
    listProducts.filter((product) => product.category.slug === "Đồng hồ");

  return (
    <>
      <Container>
        <Banner />

        {phone && phone.length > 0 && (
          <ProductList
            title="Điện Thoại"
            products={phone}
            currentUser={currentUser}
          />
        )}

        {computer && computer.length > 0 && (
          <ProductList
            title="Máy Tính"
            products={computer}
            currentUser={currentUser}
          />
        )}

        {watch && watch.length > 0 && (
          <ProductList
            title="Đồng Hồ"
            products={watch}
            currentUser={currentUser}
          />
        )}

        <Offer />

        <Features />
      </Container>
    </>
  );
};

export default HomePage;
