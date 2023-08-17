import { InputNumber } from "antd";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Button";

import { IItemCart } from "../../../interface";
import React, { useState } from "react";
import { useRemoveCartMutation, useUpdateQuantityMutation } from "../../../api/cart";
import { AiOutlineClose } from "react-icons/ai";

type CartDrawnItemProps = {
  cartItem: any;
};

const CartDrawnItem = ({ cartItem }: CartDrawnItemProps) => {
  // const [quantity, setQuantity] = useState(1)
  const [quantity, setQuantity] = useState(cartItem.quantity);
  const navigate = useNavigate()
  const handleQuantityChange = (value: number) => {
    setQuantity(value);
  };
  console.log(cartItem);
  const [updateQuantity] = useUpdateQuantityMutation()
  const [removeCart] = useRemoveCartMutation()
  console.log(cartItem?._id);
  console.log(cartItem.product?._id);
  const updateCarts = () => {
    updateQuantity(cartItem)
  }
  const removeCarts = () => {
    removeCart({ idCart: cartItem?._id, idPro: cartItem.product?._id })
  }
  return (
    <>
      <div className="flex flex-row gap-2 w-full mb-1 border rounded-xl p-2">
        <div className="aspect-square w-auto relative overflow-hidden my-auto">
          <span onClick={() => removeCarts()}><AiOutlineClose /></span>
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
              max={cartItem.product.inventory}
              value={quantity}
              defaultValue={cartItem.quantity}
              onChange={(value: any) => handleQuantityChange(value)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(CartDrawnItem);
