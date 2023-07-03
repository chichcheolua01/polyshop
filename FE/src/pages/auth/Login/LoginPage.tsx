import { useState } from "react";

import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

import Input from "../../../components/auth/Input";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="flex justify-center">
        <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
          <h2 className="text-white text-4xl mb-8 font-semibold">Đăng nhập</h2>

          <div className="flex flex-col gap-4">
            <Input
              id="email"
              type="email"
              label="Email"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
            />

            <Input
              type="password"
              id="password"
              label="Password"
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
            />
            <button
              onClick={() => alert("Đăng nhập")}
              className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition"
            >
              Đăng nhập
            </button>

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
              Bạn chưa có tài khoản
              <span
                onClick={() => navigate("/auth/register")}
                className="text-white ml-1 hover:underline cursor-pointer"
              >
                Đăng ký ngay
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
