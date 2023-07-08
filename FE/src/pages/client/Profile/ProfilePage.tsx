// Import các thư viện
import { Outlet, useLocation } from "react-router-dom";

// Import các component
import { Container, NavProfile } from "../../../components";

// Import dữ liệu, dùng khi chưa có BE
import { profile } from "../../../data";

// Type để truyền dữ liệu giữa các props
type ProfilePageProps = {
  nameUser: string | undefined;
  imageUser: string | undefined;
};

// Khởi tạo component
const ProfilePage = ({ nameUser, imageUser }: ProfilePageProps) => {
  // Sử dụng hook
  const location = useLocation();

  // Lấy đường dẫn trang hiện tại
  const path = location.pathname.substring(
    location.pathname.lastIndexOf("/") + 1
  );

  return (
    <>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 items-start gap-3 pt-4 pb-16">
          <div className="md:col-span-3 p-3">
            <NavProfile
              nameUser={nameUser}
              imageUser={imageUser}
              path={path}
              profile={profile}
            />
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
