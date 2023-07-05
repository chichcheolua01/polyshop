import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();

  return (
    <>
      <img
        className="hidden md:block cursor-pointer"
        onClick={() => navigate("/")}
        src="/images/logo.webp"
        height="100"
        width="100"
        alt="Logo"
      />
    </>
  );
};

export default Logo;
