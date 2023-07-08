import { useEffect, useState } from "react";
import {
  Banner,
  Container,
  Features,
  Offer,
  ProductList,
} from "../../../components";

import { ICategoryProduct, IFavoriteUser, IProduct } from "../../../interface";

type HomePageProps = {
  favoriteUser: IFavoriteUser[] | undefined;
  listProducts: IProduct[] | null;
  listCategories: ICategoryProduct[] | null;
};

const HomePage = ({
  favoriteUser,
  listProducts,
  listCategories,
}: HomePageProps) => {
  const [productsBySlug, setProductsBySlug] = useState<{
    [slug: string]: IProduct[];
  }>({});

  useEffect(() => {
    if (listCategories && listProducts) {
      const initialProductsBySlug: { [slug: string]: IProduct[] } = {};

      listCategories.forEach((category) => {
        const filteredProducts = listProducts.filter(
          (product) => product.category.slug === category.slug
        );
        initialProductsBySlug[category.slug] = filteredProducts;
      });

      setProductsBySlug(initialProductsBySlug);
    }
  }, [listCategories, listProducts]);

  return (
    <>
      <Container>
        <Banner />

        {Object.entries(productsBySlug).map(
          ([slug, products]) =>
            products.length > 0 && (
              <ProductList
                key={slug}
                middle
                title={slug}
                products={products}
                favoriteUser={favoriteUser}
              />
            )
        )}

        <Offer />

        <Features />
      </Container>
    </>
  );
};

export default HomePage;
