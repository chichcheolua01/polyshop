import { InputNumber } from "antd";

type CartDrawnItemProps = {
  product: { name: string; image: string; price: number; quantity: number };
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

        <div className="flex flex-col gap-2">
          <div className="font-semibold text-sm pt-3">{product.name}</div>

          <div className="font-bold text-red-500">
            {product.price.toLocaleString("vi-VN")}₫
          </div>

          <div className="flex items-center gap-2">
            <span>Số lượng:</span>

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
