import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();

  return (
    <>
      <img
        className="hidden md:block cursor-pointer max-w-[3rem]"
        onClick={() => navigate("/")}
        src="/images/logo.png"
        height="100"
        width="100"
        alt="Logo"
      />
    </>
  );
};

export default Logo;
