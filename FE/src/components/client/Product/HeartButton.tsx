import { useState } from "react";
import { notification } from "antd";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import { IUser } from "../../../interface";

type HeartButtonProps = {
  productId?: string;
  user?: IUser | null;
};

const HeartButton = ({ productId, user }: HeartButtonProps) => {
  const [api, contextHolder] = notification.useNotification();

  const [hasFavorite, setHasFavorite] = useState(
    user?.favorite.some((favorite) => favorite.productId === productId)
  );

  const toggleFavorite = () => {
    if (!user) {
      api.open({
        message: "Bạn chưa đăng nhập",
        description: "Vui lòng đăng nhập để thực hiện hành động này!.",
      });
    } else {
      console.log(productId);
      console.log(user);

      setHasFavorite(!hasFavorite);
    }
  };

  return (
    <>
      {contextHolder}
      <div
        onClick={toggleFavorite}
        className="relative hover:opacity-50 transition cursor-pointer"
      >
        <AiOutlineHeart
          size={28}
          className="fill-white absolute -top-[2px] -right-[2px]"
        />

        <AiFillHeart
          size={24}
          className={hasFavorite ? "fill-rose-500" : "fill-neutral-500/70"}
        />
      </div>
    </>
  );
};

export default HeartButton;
