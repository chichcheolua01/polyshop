import { useState } from "react";

import {
  Breadcrumb,
  CheckoutCard,
  CheckoutDelivery,
  CheckoutOrder,
  Container,
} from "../../../components";
import { IUser } from "../../../interface";

type CheckoutPageProps = {
  currentUser: IUser | null;
};

const CheckoutPage = ({ currentUser }: CheckoutPageProps) => {
  const cardMain = currentUser?.cards.find((card) => card.main === true);
  const [active, setActive] = useState("Thẻ ngân hàng");

  const toggleActive = (text: string) => {
    setActive(text);
  };

  const handlePayment = () => {
    alert("Thanh toán");
  };

  const paymentMethod = [
    {
      name: "Thẻ ngân hàng",
      image: "/images/payment/payment-method-1.png",
    },
    {
      name: "Paypal",
      image: "/images/payment/payment-method-2.png",
    },
    {
      name: "Thanh toán khi giao hàng",
      image: "/images/payment/payment-method-3.png",
    },
  ];

  return (
    <>
      <Container>
        <Breadcrumb text="Thanh toán" />

        <div className="bg-white rounded-xl p-5 mt-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="col-span-1 md:col-span-2">
              <h4 className="text-base font-medium pl-6 bg-gray-200 rounded p-3">
                Chọn phương thức thanh toán
              </h4>

              <div className="mt-10 flex flex-row gap-5">
                {paymentMethod.map((method) => (
                  <div
                    key={method.name}
                    className={`p-3 cursor-pointer rounded text-center flex flex-col items-center w-[150px]
                  ${
                    active === method.name ? "border border-rose-500" : "border"
                  }
                  `}
                    onClick={() => toggleActive(method.name)}
                  >
                    <div className="flex justify-center mb-2 h-16 items-center">
                      <img src={method.image} alt={method.image} />
                    </div>

                    <p className="text-base text-gray-500">{method.name}</p>
                  </div>
                ))}
              </div>

              {active === "Thẻ ngân hàng" && (
                <CheckoutCard cardMain={cardMain} onClick={handlePayment} />
              )}

              {active === "Thanh toán khi giao hàng" && <CheckoutDelivery />}
            </div>

            <div className="col-span-1">
              <CheckoutOrder />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CheckoutPage;
