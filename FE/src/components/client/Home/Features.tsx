import { LiaTruckSolid } from "react-icons/lia";
import { BiDollarCircle } from "react-icons/bi";
import { Ri24HoursFill } from "react-icons/ri";

const Features = () => {
  return (
    <>
      <div className="py-16">
        <div className="w-10/12 grid grid-cols-3 gap-6 mx-auto justify-center">
          <div className="border border-rose-500 rounded-sm px-3 py-6 flex justify-center items-center gap-5">
            <LiaTruckSolid size={50} className="object-contain text-rose-500" />

            <div>
              <h4 className="font-medium capitalize text-lg">
                Mua sắm miễn phí
              </h4>

              <p className="text-gray-500 text-sm">Đặt hàng trên 200</p>
            </div>
          </div>

          <div className="border border-rose-500 rounded-sm px-3 py-6 flex justify-center items-center gap-5">
            <BiDollarCircle
              size={50}
              className="object-contain text-rose-500"
            />

            <div>
              <h4 className="font-medium capitalize text-lg">Hoàn tiền</h4>

              <p className="text-gray-500 text-sm">30 ngày hoàn tiền</p>
            </div>
          </div>

          <div className="border border-rose-500 rounded-sm px-3 py-6 flex justify-center items-center gap-5">
            <Ri24HoursFill size={50} className="object-contain text-rose-500" />

            <div>
              <h4 className="font-medium capitalize text-lg">Hỗ trợ 24/7</h4>

              <p className="text-gray-500 text-sm">Hỗ trợ khách hàng</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
