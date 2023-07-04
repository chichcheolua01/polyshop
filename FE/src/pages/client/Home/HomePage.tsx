import Container from "../../../components/client/Container";
import ProductList from "../../../components/client/Product/ProductList";

const HomePage = () => {
  const products = [
    {
      _id: "product1",
      name: "Samsung Galaxy S20 FE 256GB",
      price: 6990000,
      original_price: 7490000,
      stars: 1,
      sold: 0,
      image:
        "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/s/a/samsung-galaxy-20-fe_4_.jpg",
    },
    {
      _id: "product2",
      name: "iPhone 12 64GB | Chính hãng VN/A",
      price: 13690000,
      original_price: 14690000,
      stars: 1.5,
      sold: 60,
      image:
        "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/_/1_252.jpg",
    },
    {
      _id: "product3",
      name: "Xiaomi 12T 8GB 128GB",
      price: 9190000,
      original_price: 9690000,
      stars: 2,
      sold: 50,
      image:
        "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/x/i/xiaomi-12t-den_1.jpg",
    },
    {
      _id: "product4",
      name: "vivo Y35",
      price: 5490000,
      original_price: 5990000,
      stars: 2.5,
      sold: 40,
      image:
        "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/2/_/2_282.jpg",
    },
    {
      _id: "product5",
      name: "OPPO Reno8 T 5G (8GB - 128GB)",
      price: 8490000,
      original_price: 9490000,
      stars: 3,
      sold: 30,
      image:
        "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/o/p/oppo-reno8t-vang1-thumb-600x600.jpg",
    },
    {
      _id: "product6",
      name: "Điện thoại Tecno SPARK GO 2023 4GB/64GB - Helio A22 | 5000 mAh | 6,6 HD+| Cảm ứng vân tay | Hàng chính hãng | Bảo hành chính hãng 13 tháng",
      price: 2490000,
      original_price: 2490000,
      stars: 3.5,
      sold: 20,
      image:
        "https://salt.tikicdn.com/cache/750x750/ts/product/6b/76/cb/ecff31e6f31b96158b9002eb74b76e3b.jpg.webp",
    },
    {
      _id: "product7",
      name: "Điện thoại Tecno SPARK 10 Pro 8GB/128GB - Helio G88 | 5000 mAh | Sạc nhanh 18W | Cảm ứng vân tay - Hàng chính hãng",
      price: 3590000,
      original_price: 5590000,
      stars: 4,
      sold: 30,
      image:
        "https://salt.tikicdn.com/cache/750x750/ts/product/f8/0c/fa/53ee2b104f182faa02113d68c7b7201d.png.webp",
    },
  ];

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
