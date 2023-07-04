import { useNavigate } from "react-router-dom";

import HeartButton from "./HeartButton";
import { AiFillStar } from "react-icons/ai";
import { IProduct } from "../../../interface/product";

type ProductCardProps = {
  product: IProduct;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();

  const discount = Math.round(
    ((product.original_price - product.price) / product.original_price) * 100
  );

  return (
    <>
      <div className="col-span-1 cursor-pointer group shadow-xl rounded-xl p-3 border">
        <div className="flex flex-col justify-end gap-3 w-full">
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
              src={product?.image[0].base_url}
              onClick={() => navigate(`/product-detail/${product._id}`)}
              className="object-cover h-full w-full group-hover:scale-110 transition"
            />
          </div>

          <div className="truncate">
            <span className="font-normal text-xs break-all">
              {product.name}
            </span>
          </div>

          <div className="flex items-center">
            {product.stars > 0 && (
              <div className="flex items-center">
                <span className="text-xs text-[#808089]">{product.stars}</span>

                <span className="text-[#fdd836]">
                  <AiFillStar />
                </span>
              </div>
            )}

            {product.sold > 0 && product.stars > 0 && (
              <div className="w-[1px] h-[10px] bg-[#ebebf0] ml-[2px] mr-[4px]"></div>
            )}

            {product.sold > 0 && (
              <span className="text-[#808089] text-xs">
                Đã bán {product.sold}
              </span>
            )}
          </div>

          <div className="flex flex-row gap-3">
            <div className="font-bold text-[#ff424e] text-base">
              {product.price.toLocaleString("vi-VN")}₫
            </div>

            {product.price !== product.original_price && (
              <del className="font-medium text-sm text-gray-500">
                {product.original_price.toLocaleString("vi-VN")}₫
              </del>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
