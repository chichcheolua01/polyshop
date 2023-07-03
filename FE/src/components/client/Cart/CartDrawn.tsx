import { Drawer } from "antd";
import CartDrawnItem from "./CartDrawnItem";

type CartDrawnProps = {
  isOpen: boolean;
  onClose: () => void;
};

const CartDrawn = ({ isOpen, onClose }: CartDrawnProps) => {
  return (
    <>
      <div>
        <Drawer
          title="Giỏ hàng"
          placement="right"
          onClose={onClose}
          open={isOpen}
        >
          <div className="h-[65vh] overflow-y-auto">
            <CartDrawnItem />
            <CartDrawnItem />
            <CartDrawnItem />
            <CartDrawnItem />
            <CartDrawnItem />
            <CartDrawnItem />
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
                  <span className="text-gray-500">100000</span>
                </div>
              </div>

              <button className="bg-rose-500 w-full rounded-xl p-3 hover:bg-rose-600">
                <span className="text-white">Thanh toán</span>
              </button>
            </div>
          </div>
        </Drawer>
      </div>
    </>
  );
};

export default CartDrawn;
