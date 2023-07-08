// Import các thư viện
import { useEffect, useState } from "react";

// Import các component
import {
  Banner,
  Container,
  Features,
  Offer,
  ProductList,
} from "../../../components";

// Import các interface
import { ICategoryProduct, IFavoriteUser, IProduct } from "../../../interface";

// Type để truyền dữ liệu giữa các props
type HomePageProps = {
  favoriteUser: IFavoriteUser[] | undefined;
  listProducts: IProduct[] | null;
  listCategories: ICategoryProduct[] | null;
};

// Khởi tạo component
const HomePage = ({
  favoriteUser,
  listProducts,
  listCategories,
}: HomePageProps) => {
  // Sử dụng hook
  const [productsBySlug, setProductsBySlug] = useState<{
    [slug: string]: IProduct[];
  }>({});

  useEffect(() => {
    // Nếu có danh sách danh mục và danh sách sản phẩm
    if (listCategories && listProducts) {
      // Khởi tạo đối tượng lưu trữ danh sách các sản phẩm theo slug
      const initialProductsBySlug: { [slug: string]: IProduct[] } = {};

      // Duyệt qua các danh mục
      listCategories.forEach((category) => {
        // Lọc sản phẩm theo slug hiện tại
        const filteredProducts = listProducts.filter(
          (product) => product.category.slug === category.slug
        );

        // Gán mảng lọc được vào danh sách sản phẩm với 1 khóa là slug hiện tại
        initialProductsBySlug[category.slug] = filteredProducts;
      });

      // Cập nhật giá trị state
      setProductsBySlug(initialProductsBySlug);
    }

    // Render lại khi danh sách danh mục hoặc danh sách sản phẩm thay đổi
  }, [listCategories, listProducts]);

  return (
    <>
      <Container>
        <Banner />

        {/* chuyển đổi productsBySlug thành một mảng gồm các cặp khóa-giá
        trị [slug, products]. Sau đó, nó duyệt qua mảng này và tạo các
        component ProductList cho các cặp khóa-giá trị */}
        {Object.entries(productsBySlug).map(
          ([slug, products]) =>
            // Nếu mảng products không rỗng
            products.length > 0 && (
              <ProductList
                middle
                key={slug}
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
