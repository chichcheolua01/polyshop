import MyAccount from "./MyAccount";

const Account = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <MyAccount title="Thông tin cá nhân" url="information" />
        <MyAccount title="Địa chỉ giao hàng" url="order-address" />
        <MyAccount title="Thông tin thanh toán" url="billing" />
      </div>

      <div className="pt-3">Đơn hàng gần đây</div>
    </>
  );
};

export default Account;
