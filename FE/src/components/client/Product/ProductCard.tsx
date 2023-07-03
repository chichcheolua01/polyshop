import { useNavigate } from "react-router-dom";

import HeartButton from "./HeartButton";
import StarButton from "./StarButton";

type Props = {
  product: any;
};

const ProductCard = ({ product }: Props) => {
  const navigate = useNavigate();

  const discount = Math.round(
    ((product.original_price - product.price) / product.original_price) * 100
  );

  return (
    <>
      <div className="col-span-1 cursor-pointer group shadow-xl rounded-xl p-3 shadow-xl border">
        <div className="flex flex-col gap-2 w-full">
          <div className="flex flex-row justify-between">
            {discount > 0 && (
              <div className="relative mt-[-15px] ml-[-15px]">
                <div className="flex justify-center items-center bg-[#d70018] rounded-r-2xl px-4 py-1">
                  <span className="text-white text-[12px] font-semibold">
                    Giảm {discount}%
                  </span>
                </div>
              </div>
            )}

            <div className="w-auto">
              <HeartButton />
            </div>
          </div>

          <div className="aspect-square w-full relative overflow-hidden">
            <img
              alt="Product"
              src={product.image}
              onClick={() => navigate(`/product-detail/${product._id}`)}
              className="object-cover h-full w-full group-hover:scale-110 transition"
            />
          </div>

          <div className="font-semibold text-lg pt-3">{product.name}</div>

          <div className="flex flex-row items-center gap-3">
            <div className="font-bold text-red-500">
              {product.price.toLocaleString("vi-VN")}₫
            </div>

            <del className="font-medium text-gray-500">
              {product.original_price.toLocaleString("vi-VN")}₫
            </del>
          </div>

          <div className="font-light text-neutral-500 flex flex-row-reverse">
            <StarButton star={product.stars} disabled />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
