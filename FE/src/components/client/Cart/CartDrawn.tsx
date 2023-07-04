import { useNavigate } from "react-router-dom";
import { Drawer } from "antd";

import CartDrawnItem from "./CartDrawnItem";
import Button from "../Button";

import { ICart } from "../../../interface/cart";

type CartDrawnProps = {
  isOpen: boolean;
  onClose: () => void;
  carts?: ICart | null | undefined;
};

const CartDrawn = ({ isOpen, onClose, carts }: CartDrawnProps) => {
  const navigate = useNavigate();

  return (
    <>
      <Drawer
        title="Giỏ hàng"
        placement="right"
        onClose={onClose}
        open={isOpen}
      >
        <div className="h-[65vh] overflow-y-auto">
          {carts && carts.products && carts.products.length > 0 ? (
            carts.products.map((cartItem) => (
              <CartDrawnItem key={cartItem.product._id} cartItem={cartItem} />
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
                  {(carts &&
                    carts.totalPrice &&
                    carts.totalPrice.toLocaleString("vi-VN")) ||
                    0}
                  ₫
                </span>
              </div>
            </div>

            <Button label="Thanh toán" onClick={() => navigate("/checkout")} />
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default CartDrawn;
