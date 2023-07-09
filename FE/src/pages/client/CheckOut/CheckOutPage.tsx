// Import các thư viện
import { useState } from "react";

// Import các component
import {
  Breadcrumb,
  CheckoutCard,
  CheckoutDelivery,
  CheckoutOrder,
  Container,
} from "../../../components";

// Import các interface
import { ICart, ICardUser } from "../../../interface";

// Type để truyền dữ liệu giữa các props
type CheckoutPageProps = {
  cardUser: ICardUser[] | undefined;
  cart: ICart | null;
};

// Khởi tạo component
const CheckoutPage = ({ cardUser, cart }: CheckoutPageProps) => {
  // Sử dụng hook, mắc định là "Thẻ ngân hàng"
  const [active, setActive] = useState("Thẻ ngân hàng");

  // Lấy thông tin thẻ ngân hàng được đặt là main của người dùng
  const cardMain = cardUser && cardUser.find((card) => card.main === true);

  // Nếu cart rỗng thì disabled
  const disabled = cart ? false : true;

  // Cập nhật lại state
  const toggleActive = (text: string) => {
    setActive(text);
  };

  // Xử lý sự kiện
  const handlePayment = () => {
    alert("Thanh toán");
  };

  // Mảng chứa các đối tượng
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
                {/* Duyệt qua từng phần tử của paymentMethod */}
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

              {/* Nếu active là "Thẻ ngân hàng" thì hiển thị component */}
              {active === "Thẻ ngân hàng" && (
                <CheckoutCard
                  cardMain={cardMain}
                  title="Thẻ ngân hàng"
                  onClick={handlePayment}
                  disabled={disabled}
                />
              )}

              {active === "Thanh toán khi giao hàng" && (
                <CheckoutDelivery
                  title="Thanh toán khi giao hàng"
                  onClick={handlePayment}
                  disabled={disabled}
                />
              )}
            </div>

            <div className="col-span-1 ">
              <CheckoutOrder cart={cart} />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CheckoutPage;
