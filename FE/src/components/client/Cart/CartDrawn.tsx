import { Drawer } from "antd";
import { useNavigate } from "react-router-dom";

import Button from "../../Button";
import CartDrawnItem from "./CartDrawnItem";

import { ICart, IUser } from "../../../interface";
import { useUpdateQuantityMutation } from "../../../api/cart";
import { useState } from "react";

type CartDrawnProps = {
  isOpen: boolean;
  currentUser: IUser | null;
  cart: any;
  onClose: () => void;
};


const CartDrawn = ({ currentUser, isOpen, onClose, cart }: CartDrawnProps) => {
  const [updateCart] = useUpdateQuantityMutation();
  const navigate = useNavigate()


  const updateProductQuantity = (product: string, quantity: number) => {
    console.log(quantity);
    // Gọi API để cập nhật số lượng sản phẩm trong giỏ hàng trên server
    updateCart({ _id: cart._id, products: [{ product, quantity }] })
  };
  const handleCheckout = () => {
    // updateCart({ _id: cart._id, products: carts.products });
    navigate("/checkout");
  };
  const totalPrice = cart?.products?.reduce((total: any, products: any) => {

    const productPrice = products?.product?.price;
    return total + productPrice * products?.quantity;
  }, 0)
  return (
    <>
      <Drawer
        title="Giỏ hàng"
        placement="right"
        onClose={onClose}
        open={isOpen}
      >
        <div className="h-[65vh] overflow-y-auto">
          {cart && cart.products && cart.products.length > 0 ? (
            cart.products.map((cartItem: any) => (
              <CartDrawnItem key={cartItem.product._id} idCart={cart?._id} cartItem={cartItem} onChange={updateProductQuantity} />
            ))
          ) : (
            <div className="flex justify-center">
              <span>Không có sản phẩm nào trong giỏ hàng</span>
            </div>
          )}
        </div>

        <div className="absolute left-0 bottom-0 w-full border-t p-4">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <div className="flex justify-between">
                <span className="font-bold">Giảm giá:</span>
                <span className="text-gray-500">10%</span>
              </div>

              <div className="flex justify-between">
                <span className="font-bold">Tổng phụ:</span>
                <span className="text-gray-500">
                  {(totalPrice?.toLocaleString("vi-VN")) ||
                    0}
                  ₫
                </span>
              </div>
            </div>

            <Button
              label="Thanh toán"
              disabled={!currentUser}
              onClick={() => handleCheckout()}
            />
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default CartDrawn;
