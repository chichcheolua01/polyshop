// Import các thư viện
import { useNavigate } from "react-router-dom";

// Type để truyền dữ liệu giữa các props
type LogoProps = {
  large?: boolean;
};

// Khởi tạo component
const Logo = ({ large }: LogoProps) => {
  // Sử dụng hook
  const navigate = useNavigate();

  return (
    <>
      <img
        alt="Logo"
        width={large ? 150 : 100}
        height={100}
        src="/images/logo.webp"
        onClick={() => navigate("/")}
        className="hidden md:block cursor-pointer"
      />
    </>
  );
};

export default Logo;
