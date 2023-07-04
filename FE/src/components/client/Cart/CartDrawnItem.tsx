import { InputNumber } from "antd";
import { IProductCart } from "../../../interface/cart";

type CartDrawnItemProps = {
  product: IProductCart;
};

const CartDrawnItem = ({ product }: CartDrawnItemProps) => {
  const onChange = (value: number | null) => {
    console.log(value);
  };

  return (
    <>
      <div className="flex flex-row gap-2 w-full p-1">
        <div className="aspect-square w-auto relative overflow-hidden my-auto">
          <img
            src={product.image}
            width={100}
            height={100}
            alt="Product"
            className="object-cover group-hover:scale-110 transition"
          />
        </div>

        <div className="flex flex-col gap-2 truncate w-2/3">
          <span className="font-semibold text-sm break-all">
            {product.name}
          </span>

          <span className="font-bold text-[#ff424e] text-base">
            {product.price.toLocaleString("vi-VN")}₫
          </span>

          <div className="flex items-center gap-2">
            <span className="text-xs">Số lượng:</span>

            <InputNumber
              min={1}
              max={10}
              defaultValue={product.quantity}
              onChange={onChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDrawnItem;
