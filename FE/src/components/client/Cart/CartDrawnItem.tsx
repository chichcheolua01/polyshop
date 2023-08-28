import { Button, InputNumber, Popconfirm, message } from "antd";
import { Link, useNavigate } from "react-router-dom";

import { IItemCart } from "../../../interface";
import React, { useState } from "react";
import { useRemoveCartMutation, useUpdateQuantityMutation } from "../../../api/cart";
import { AiOutlineClose } from "react-icons/ai";

type CartDrawnItemProps = {
  cartItem: any;
  idCart: string
  onChange: (productId: string, quantity: number) => void;
};

const CartDrawnItem = ({ idCart, cartItem, onChange }: CartDrawnItemProps) => {
  const [quantity, setQuantity] = useState(cartItem.quantity)
  const [remove] = useRemoveCartMutation()
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Xóa sản phẩm trong giỏ hàng thành công',
    });
  };

  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'Xóa sản phẩm trong giỏ hàng thất bại',
    });
  };
  const removeCarts = () => {
    remove({ cartId: idCart, productId: cartItem?.product?._id })
      .unwrap()
      .then(() => success())
      .catch(() => error())
  }
  const text = 'Are you sure to delete this task?';
  const description = 'Delete the task';

  const handleQuantityChange = (value: number) => {
    setQuantity(value)
    onChange(cartItem.product._id, value);
  };
  return (
    <>
      <div className="flex flex-row gap-2 w-full mb-1 border rounded-xl p-2">
        <div className="aspect-square w-auto relative overflow-hidden my-auto">
          {contextHolder}
          <Popconfirm
            placement="topLeft"
            title={text}
            description={description}
            onConfirm={removeCarts}
            okText="Yes"
            cancelText="No"
          >
            <span><AiOutlineClose /></span>
          </Popconfirm>
          <img
            src={cartItem.product.images[0]?.uid}
            width={100}
            height={100}
            alt="Product"
            className="object-cover group-hover:scale-110 transition"
          />
        </div>

        <div className="flex flex-col gap-2 w-2/3">
          <Link
            to={`/product-detail/${cartItem.product._id}`}
            className="font-semibold text-sm break-all truncate hover:text-rose-500"
          >
            {cartItem.product.name}
          </Link>

          <span className="font-bold text-[#ff424e] text-base">
            {cartItem.product.price.toLocaleString("vi-VN")}₫
          </span>

          <div className="flex items-center gap-2">
            <span className="text-xs">Số lượng:</span>

            <InputNumber
              min={1}
              max={cartItem.product.inventory - cartItem.quantity}
              value={quantity}
              defaultValue={cartItem.quantity}
              onChange={(value) => handleQuantityChange(value)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(CartDrawnItem);
