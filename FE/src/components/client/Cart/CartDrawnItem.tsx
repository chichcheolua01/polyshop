import { InputNumber } from "antd";

type Props = {};

const CartDrawnItem = (props: Props) => {
  const onChange = (value: number | null) => {
    console.log(value);
  };

  return (
    <>
      <div className="flex flex-row gap-2 w-full p-1">
        <div className="aspect-square w-auto relative overflow-hidden my-auto">
          <img
            width={100}
            height={100}
            alt="Product"
            className="object-cover group-hover:scale-110 transition"
            src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/s/a/samsung-galaxy-20-fe_4_.jpg"
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="font-semibold text-sm pt-3">
            Samsung Galaxy S20 FE 256GB
          </div>

          <div className="font-bold text-red-500">
            {(6990000).toLocaleString("vi-VN")}₫
          </div>

          <div className="flex items-center gap-2">
            <span>Số lượng:</span>

            <InputNumber
              min={1}
              max={10}
              defaultValue={3}
              onChange={onChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDrawnItem;
