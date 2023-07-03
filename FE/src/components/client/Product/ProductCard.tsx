import { useNavigate } from "react-router-dom";

import HeartButton from "./HeartButton";
import StarButton from "./StarButton";

type Props = {};

const ProductCard = (props: Props) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="col-span-1 cursor-pointer group shadow-xl rounded-xl p-3 shadow-xl border">
        <div className="flex flex-col gap-2 w-full">
          <div className="absolute z-10 top-[9rem] bg-[#d70018] rounded-r-xl px-2 py-1 ml-[-15px]">
            <span className="text-white text-[12px] font-semibold">
              Giảm 11%
            </span>
          </div>

          <div className="aspect-square w-full relative overflow-hidden">
            <img
              alt="Product"
              src="images/logo.png"
              onClick={() => navigate(`/product-detail/id`)}
              className="object-cover h-full w-full group-hover:scale-110 transition"
            />

            <div className="absolute z-10 top-0 right-0">
              <HeartButton />
            </div>
          </div>

          <div className="font-semibold text-lg pt-3">
            iPhone 14 Pro Max 128GB | Chính hãng VN/A
          </div>

          <div className="flex flex-row items-center gap-1">
            <div className="font-semibold text-red-500">26.650.000₫</div>
            {"-"}
            <del className="font-medium text-gray-500">26.650.000₫</del>
          </div>

          <div className="font-light text-neutral-500">
            <StarButton star={4} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
