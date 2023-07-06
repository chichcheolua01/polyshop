import MyAccount from "./MyAccount";

import { IUser } from "../../../../interface";

type AccountProps = {
  currentUser: IUser | null;
};

const Account = ({ currentUser }: AccountProps) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <MyAccount
          title="Thông tin cá nhân"
          url="information"
          text={currentUser?.name}
          email={currentUser?.email}
          phone={currentUser?.phone}
        />
        <MyAccount
          title="Địa chỉ giao hàng"
          url="order-address"
          text={currentUser?.address}
        />
        <MyAccount
          title="Thông tin thanh toán"
          url="billing"
          text={currentUser?.role}
        />
      </div>

      <div className="bg-white rounded-xl mt-5">
        <div className="p-3">Đơn hàng gần đây</div>
      </div>
    </>
  );
};

export default Account;
