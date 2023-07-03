import { Drawer } from "antd";

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
          <div>
            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-28 md:rounded-none md:rounded-l-lg sm:h-auto sm:w-auto sm:rounded-none sm:rounded-l-lg "
                src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/2/_/2_282.jpg" alt="" />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Iphone 14 Promax</h5>
                <span className="mb-2 text-red-500 font-bold text-[16px]">30.000.000đ</span>
                <div className="flex items-center border-gray-100">
                  <span className="text-[15px]">Số lượng: </span>
                  <span className="cursor-pointer rounded-l ml-1 bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                  <input className="h-7 w-8 border bg-white text-center text-xs outline-none" type="number" value="2" min="1" />
                  <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
                </div>
              </div>
            </div>

          </div>

        </Drawer>
      </div>
    </>
  );
};

export default CartDrawn;
