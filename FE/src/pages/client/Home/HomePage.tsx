import {
  Banner,
  Container,
  Features,
  Offer,
  ProductList,
} from "../../../components";

import { IFavoriteUser, IProduct } from "../../../interface";

type HomePageProps = {
  favoriteUser: IFavoriteUser[] | undefined;
  listProducts: IProduct[] | null;
};

const HomePage = ({ favoriteUser, listProducts }: HomePageProps) => {
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
            favoriteUser={favoriteUser}
          />
        )}

        {computer && computer.length > 0 && (
          <ProductList
            title="Máy Tính"
            products={computer}
            favoriteUser={favoriteUser}
          />
        )}

        {watch && watch.length > 0 && (
          <ProductList
            title="Đồng Hồ"
            products={watch}
            favoriteUser={favoriteUser}
          />
        )}

        <Offer />

        <Features />
      </Container>
    </>
  );
};

export default HomePage;
