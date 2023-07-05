import { Outlet, useLocation } from "react-router-dom";

import { AiOutlineProfile, AiOutlineGift } from "react-icons/ai";
import { BsCreditCard } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";

import { Container, NavProfile } from "../../../components";

import { IProfile, IUser } from "../../../interface";

type ProfilePageProps = {
  currentUser: IUser | null;
};

const ProfilePage = ({ currentUser }: ProfilePageProps) => {
  const location = useLocation();
  const path = location.pathname.substring(
    location.pathname.lastIndexOf("/") + 1
  );

  const profile: IProfile[] = [
    {
      title: "Quản lý tài khoản",
      url: "account",
      Icon: AiOutlineProfile,
      list: [
        {
          name: "Thông tin cá nhân",
          url: "information",
        },
        {
          name: "Đổi mật khẩu",
          url: "change-password",
        },
      ],
    },
    {
      title: "Đơn hàng",
      url: "orders",
      Icon: AiOutlineGift,
      list: [
        {
          name: "Lịch sử đặt hàng",
          url: "order-history",
        },
        {
          name: "Địa chỉ giao hàng",
          url: "order-address",
        },
      ],
    },
    {
      title: "Phương thức thanh toán",
      url: "payment",
      Icon: BsCreditCard,
      list: [
        {
          name: "voucher",
          url: "voucher",
        },
      ],
    },
    {
      title: "Sản phẩm yêu thích",
      url: "favorite",
      Icon: MdFavoriteBorder,
    },
  ];

  return (
    <>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 items-start gap-3 pt-4 pb-16">
          <div className="md:col-span-3 p-3">
            <NavProfile user={currentUser} path={path} profile={profile} />
          </div>

          <div className="md:col-span-9 p-3">
            <Outlet />
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProfilePage;
