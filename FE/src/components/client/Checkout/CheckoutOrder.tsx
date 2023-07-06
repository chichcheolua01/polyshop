import { Link } from "react-router-dom";
import { ICart } from "../../../interface";

type CheckoutOrderProps = {
  cart: ICart | null;
};

const CheckoutOrder = ({ cart }: CheckoutOrderProps) => {
  const total = cart && cart?.totalPrice;

  return (
    <>
      <h4 className="text-base font-medium pl-6 bg-gray-200 rounded p-3">
        Đơn đặt hàng của bạn
      </h4>

      <div className="border mt-10 p-3 rounded-xl">
        <h4 className="uppercase font-semibold border-b py-3">
          Tóm tắt đơn hàng
        </h4>

        <div className="mb-5 h-[65vh] overflow-y-auto">
          {cart ? (
            cart?.products.map((product, i) => (
              <div
                key={i}
                className="grid grid-cols-3 gap-5 mt-5 border p-3 shadow rounded-xl"
              >
                <div className="col-span-1">
                  <img src={product.product.image} alt="Product" />
                </div>
                <div className="col-span-2 flex flex-col gap-2">
                  <Link
                    to={`/product-detail/${product.product._id}`}
                    className="text-base font-semibold hover:text-rose-500"
                  >
                    {product.product.name}
                  </Link>
                  <p className="text-gray-500 text-base">x{product.quantity}</p>
                  <p className="text-rose-500 text-base font-semibold">
                    {product.product.price}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500 pt-3">
              Không có sản phẩm nào trong giỏ hàng
            </div>
          )}
        </div>

        <div className="flex border-t flex-col gap-1 py-3">
          <div className="flex justify-between items-center">
            <h4 className="uppercase font-normal text-base">Tổng phụ: </h4>

            <span className="text-lg font-semibold text-rose-500">
              {cart?.totalPrice.toLocaleString("vi-VN") || 0}₫
            </span>
          </div>

          <div className="flex justify-between items-center">
            <h4 className="uppercase font-normal text-base">
              Phí vận chuyển:{" "}
            </h4>

            <span className="text-lg font-semibold text-rose-500">
              {(0).toLocaleString("vi-VN")}₫
            </span>
          </div>
        </div>

        <div className="flex py-3 justify-between border-t items-center">
          <h4 className="uppercase font-bold text-base">Tổng: </h4>

          <span className="text-lg font-semibold text-rose-500">
            {total ? total.toLocaleString("vi-VN") : 0}₫
          </span>
        </div>
      </div>
    </>
  );
};

export default CheckoutOrder;
