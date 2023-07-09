// Import các thư viện
import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

// Import các icon
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

// Khởi tạo component
import { Button, Input } from "../../../components";

// Khởi tạo component
const RegisterPage = () => {
  // Sử dụng hook
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="flex justify-center">
        <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
          <h2 className="text-white text-4xl mb-8 font-semibold">Đăng ký</h2>

          <div className="flex flex-col gap-4">
            <Input
              id="name"
              type="name"
              label="Name"
              value={name}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
            />

            <Input
              id="email"
              type="email"
              label="Email"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />

            <Input
              type="password"
              id="password"
              label="Password"
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />
            <Button label="Đăng ký" onClick={() => alert("Đăng ký")} />

            <div className="flex flex-row items-center gap-4 mt-8 justify-center">
              <div
                onClick={() => alert("Google")}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
              >
                <FcGoogle size={32} />
              </div>

              <div
                onClick={() => alert("Facebook")}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition text-blue-600"
              >
                <FaFacebook size={32} />
              </div>
            </div>

            <p className="text-neutral-500 mt-12">
              Bạn đã có tài khoản
              <span
                onClick={() => navigate("/auth")}
                className="text-white ml-1 hover:underline cursor-pointer"
              >
                Đăng nhập ngay
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
