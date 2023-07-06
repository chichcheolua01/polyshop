import { Tabs } from "antd";
import { useEffect, useState } from "react";
import type { TabsProps } from "antd";

import { BiCheckShield } from "react-icons/bi";

import { Button, Input } from "../../..";

type ChangePasswordProps = {
  emailUser: string | undefined;
};

const ChangePassword = ({ emailUser }: ChangePasswordProps) => {
  const [step, setStep] = useState("1");
  const [code, setCode] = useState("");
  const [passwordOld, setPasswordOld] = useState("");
  const [passwordNew, setPasswordNew] = useState("");
  const [hidden, setHidden] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const hiddenEmail = (email: string) => {
    if (!email) {
      return "";
    }

    const hiddenEmail = email.replace(/.{3}(?=@)/, "***");

    return hiddenEmail;
  };

  useEffect(() => {
    setStep("1");
    setHidden(false);
    setDisabled(false);
  }, [emailUser]);

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `Xác minh danh tính`,
      disabled: disabled,
      children: (
        <>
          <div className="flex flex-col items-center gap-5">
            <BiCheckShield size={200} className="text-red-500 mt-5" />

            <h2 className="text-base text-gray-500">
              Để tăng cường bảo mật, hãy xác minh đây là tài khoản của bạn.
            </h2>

            {emailUser && (
              <>
                <div
                  className={`flex md:flex-row flex-col gap-5 border-t p-5 items-center ${
                    hidden ? "hidden" : "block"
                  }`}
                >
                  <span className="flex text-lg font-semibold">
                    <span className="mr-1">Email: </span>

                    {hiddenEmail(emailUser)}
                  </span>

                  <Button
                    small
                    label="Gửi mã"
                    onClick={() => setHidden(!hidden)}
                  />
                </div>

                <div
                  className={`flex gap-5 border-t p-5 ${
                    hidden ? "block" : "hidden"
                  }`}
                >
                  <div className="w-full">
                    <Input
                      id="code"
                      value={code}
                      label="Mã xác minh"
                      onChange={(e) => setCode(e.target.value)}
                    />
                  </div>

                  <Button
                    label="Xác nhận"
                    onClick={() => {
                      setStep("2");
                      setDisabled(true);
                    }}
                  />
                </div>
              </>
            )}
          </div>
        </>
      ),
    },
    {
      key: "2",
      label: `Đổi mật khẩu`,
      disabled: !disabled,
      children: (
        <>
          <div className="flex flex-col gap-3">
            <Input
              id="passwordOld"
              type="password"
              value={passwordOld}
              label="Mật khẩu cũ"
              onChange={(e) => setPasswordOld(e.target.value)}
            />

            <Input
              id="passwordNew"
              type="password"
              value={passwordNew}
              label="Mật khẩu mới"
              onChange={(e) => setPasswordNew(e.target.value)}
            />

            <Button
              label="Đổi mật khẩu"
              onClick={() => alert("Đổi mật khẩu")}
            />
          </div>
        </>
      ),
    },
  ];

  return (
    <>
      <div className="bg-white p-3 py-10 rounded-xl">
        <Tabs
          activeKey={step}
          tabPosition="top"
          items={items}
          size="large"
          type="line"
          centered
        />
      </div>
    </>
  );
};

export default ChangePassword;
