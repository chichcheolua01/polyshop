import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { notification } from "antd";

type Props = {
  productId?: string;
  userId?: string | null;
};

const HeartButton = ({ productId, userId }: Props) => {
  const [api, contextHolder] = notification.useNotification();

  const [hasFavorite, setHasFavorite] = useState(false);

  const toggleFavorite = () => {
    if (!userId) {
      api.open({
        message: "Bạn chưa đăng nhập",
        description: "Vui lòng đăng nhập để thực hiện hành động này!.",
      });
    } else {
      setHasFavorite(!hasFavorite);
    }
  };

  return (
    <>
      {contextHolder}
      <div
        onClick={toggleFavorite}
        className="relative hover:opacity-80 transition cursor-pointer"
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
