import { InputNumber } from "antd";

import { ICartItem } from "../../../interface";

type CartDrawnItemProps = {
  cartItem: ICartItem;
};

const CartDrawnItem = ({ cartItem }: CartDrawnItemProps) => {
  const onChange = (value: number | null) => {
    console.log(value);
  };

  return (
    <>
      <div className="flex flex-row gap-2 w-full mb-1 border rounded-xl p-2">
        <div className="aspect-square w-auto relative overflow-hidden my-auto">
          <img
            src={cartItem.product.image}
            width={100}
            height={100}
            alt="Product"
            className="object-cover group-hover:scale-110 transition"
          />
        </div>

        <div className="flex flex-col gap-2 w-2/3">
          <span className="font-semibold text-sm break-all truncate">
            {cartItem.product.name}
          </span>

          <span className="font-bold text-[#ff424e] text-base">
            {cartItem.product.price.toLocaleString("vi-VN")}₫
          </span>

          <div className="flex items-center gap-2">
            <span className="text-xs">Số lượng:</span>

            <InputNumber
              min={1}
              max={cartItem.product.inventory}
              defaultValue={cartItem.quantity}
              onChange={onChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDrawnItem;
