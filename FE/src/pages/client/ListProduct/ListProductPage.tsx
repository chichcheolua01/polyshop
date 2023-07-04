import Container from "../../../components/client/Container";
import ProductList from "../../../components/client/Product/ProductList";
import SideBar from "../../../components/sideBar/SideBar";

const ListProductPage = () => {
  const products = [
    {
      _id: "product1",
      name: "Samsung Galaxy S20 FE 256GB",
      price: 6990000,
      original_price: 7490000,
      stars: 1,
      image:
        "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/s/a/samsung-galaxy-20-fe_4_.jpg",
    },
    {
      _id: "product2",
      name: "iPhone 12 64GB | Chính hãng VN/A",
      price: 13690000,
      original_price: 14690000,
      stars: 1.5,
      image:
        "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/_/1_252.jpg",
    },
    {
      _id: "product3",
      name: "Xiaomi 12T 8GB 128GB",
      price: 9190000,
      original_price: 9690000,
      stars: 2,
      image:
        "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/x/i/xiaomi-12t-den_1.jpg",
    },
    {
      _id: "product4",
      name: "vivo Y35",
      price: 5490000,
      original_price: 5990000,
      stars: 2.5,
      image:
        "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/2/_/2_282.jpg",
    },
    {
      _id: "product5",
      name: "OPPO Reno8 T 5G (8GB - 128GB)",
      price: 8490000,
      original_price: 9490000,
      stars: 3,
      image:
        "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/o/p/oppo-reno8t-vang1-thumb-600x600.jpg",
    },
    {
      _id: "product6",
      name: "OPPO Reno8 T 5G (8GB - 128GB)",
      price: 8490000,
      original_price: 9490000,
      stars: 3.5,
      image:
        "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/o/p/oppo-reno8t-vang1-thumb-600x600.jpg",
    },
    {
      _id: "product7",
      name: "OPPO Reno8 T 5G (8GB - 128GB)",
      price: 8490000,
      original_price: 9490000,
      stars: 4,
      image:
        "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/o/p/oppo-reno8t-vang1-thumb-600x600.jpg",
    },
  ];
  return <div className="">
    <div>
      <SideBar />
      <Container>
        <ProductList title="Điện thoại nổi bật nhất" products={products} />
        <ProductList title="Máy tính nổi bật nhất" products={products} />
      </Container>
    </div>
  </div>;

};

export default ListProductPage;
