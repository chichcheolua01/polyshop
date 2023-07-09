// Import các component
import MyAccount from "./MyAccount";

// Import các interface
import { IUser } from "../../../../interface";

// Type để truyền dữ liệu giữa các props
type AccountProps = {
  currentUser: IUser | null;
};

// Khởi tạo component
const Account = ({ currentUser }: AccountProps) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <MyAccount
          title="Thông tin cá nhân"
          url="information"
          label={currentUser?.name}
          text1={currentUser?.email}
          text2={currentUser?.phone}
        />
        <MyAccount
          title="Địa chỉ giao hàng"
          url="order-address"
          text1={currentUser?.address || "Bạn chưa có địa chỉ giao hàng"}
        />
        <MyAccount
          title="Thông tin thanh toán"
          url="billing"
          label={currentUser?.role}
        />
      </div>

      <div className="bg-white rounded-xl mt-5">
        <div className="p-3">Đơn hàng gần đây</div>
      </div>
    </>
  );
};

export default Account;
