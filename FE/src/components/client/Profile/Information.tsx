import { ChangeEvent, useState } from "react";

import { Button, Input } from "../..";

const Information = () => {
  const [name, setName] = useState("Lương");
  const [email, setEmail] = useState("tranluong460@gmail.com");
  const [address, setAddress] = useState(
    "Đại Mão - Đại Thành - Hiệp Hòa - Bắc Giang"
  );
  const [phone, setPhone] = useState("0367370371");

  return (
    <>
      <div className="p-3 bg-white">
        <h4 className="text-2xl font-medium capitalize mb-4 p-4">
          Thông tin cá nhân
        </h4>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              id="name"
              value={name}
              label="Tên"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
            />
            <Input
              id="email"
              value={email}
              label="Email"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
            <Input
              id="address"
              value={address}
              label="Địa chỉ"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setAddress(e.target.value)
              }
            />
            <Input
              id="phone"
              value={phone}
              label="Số điện thoại"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPhone(e.target.value)
              }
            />
          </div>

          <div className="mt-5 flex justify-center">
            <div className="w-1/3">
              <Button label="Cập nhật" onClick={() => alert("Cập nhật")} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Information;
