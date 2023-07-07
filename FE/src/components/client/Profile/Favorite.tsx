import { ProductList } from "../..";
import { IFavoriteUser, IProduct } from "../../../interface";

type FavoriteProps = {
  favorites: IFavoriteUser[] | undefined;
  listProducts: IProduct[] | null;
};

const Favorite = ({ favorites, listProducts }: FavoriteProps) => {
  const favoriteProducts =
    listProducts && favorites
      ? listProducts.filter((product) => {
          return favorites.some((fav) => {
            return product._id === fav.productId;
          });
        })
      : [];

  return (
    <>
      <div className="p-3 bg-white rounded-xl">
        <ProductList
          small
          products={favoriteProducts}
          favoriteUser={favorites}
        />
      </div>
    </>
  );
};

export default Favorite;
