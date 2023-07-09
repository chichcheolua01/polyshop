// Import các thư viện
import { Image } from "antd";
import { useState } from "react";
import { InputNumber } from "antd";

// Import các icon
import { AiOutlineShoppingCart } from "react-icons/ai";

// Import các component
import Button from "../../../Button";
import StarButton from "../StarButton";
import HeartButton from "../HeartButton";

// Import các interface
import { IFavoriteUser, IProduct } from "../../../../interface";

// Type để truyền dữ liệu giữa các props
type ProductInfoProps = {
  product?: IProduct | null;
  favoriteUser: IFavoriteUser[] | undefined;
};

// Khởi tạo component
const ProductInfo = ({ product, favoriteUser }: ProductInfoProps) => {
  // Sử dụng hook
  const [visible, setVisible] = useState(false);

  const onChange = (value: number | null) => {
    console.log(value);
  };

  return (
    <>
      <section className="text-gray-700 body-font overflow-hidden bg-white border rounded-xl shadow-lg">
        <div className="p-5 mx-auto">
          <div className="mx-auto flex flex-wrap">
            <div className="flex flex-col gap-5">
              <Image
                preview={{ visible: false }}
                src={product?.image?.[0].url}
                onClick={() => setVisible(true)}
                className="border p-2 rounded-lg"
                width={300}
              />

              <div style={{ display: "none" }}>
                <Image.PreviewGroup
                  preview={{
                    visible,
                    onVisibleChange: (vis) => setVisible(vis),
                  }}
                >
                  {product?.image.map((img) => (
                    <Image key={img.url} src={img.url} />
                  ))}
                </Image.PreviewGroup>
              </div>

              <div className="flex flex-row gap-3">
                {product?.image.map((img) => (
                  <Image
                    key={img.url}
                    src={img.url}
                    width={70}
                    className="border p-3 rounded-lg"
                  />
                ))}
              </div>
            </div>

            <div className="lg:w-2/3 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                Thương hiệu: {product?.category.brand}
              </h2>

              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 md:my-5">
                {product?.name}
              </h1>

              <div className="md:my-5">
                <span className="title-font font-medium text-2xl text-red-500">
                  {product?.price.toLocaleString("vi-VN")}₫
                </span>

                <del className="text-gray-500 font-semibold ml-5 text-xl">
                  {product?.price.toLocaleString("vi-VN")}₫
                </del>
              </div>

              <div className="flex mb-4 my-5">
                <span className="flex items-center">
                  <StarButton star={product?.stars} disabled />

                  <span className="text-gray-600 ml-3 mt-1 border-l-2 pl-3">
                    Số lượng: {product?.inventory} sản phẩm
                  </span>
                </span>
              </div>

              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                <div className="flex">
                  <span className="mr-3">
                    Số lượng:{" "}
                    <InputNumber
                      min={1}
                      max={product?.inventory}
                      defaultValue={1}
                      onChange={onChange}
                    />
                  </span>
                </div>
              </div>

              <div className="flex">
                <Button
                  label="Thêm vào giỏ hàng"
                  icon={AiOutlineShoppingCart}
                  onClick={() => alert("Thành công!")}
                  disabled={product?.inventory === 0}
                />

                <button className="rounded-full w-16 h-14 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <HeartButton
                    productId={product?._id}
                    favoriteUser={favoriteUser}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductInfo;
