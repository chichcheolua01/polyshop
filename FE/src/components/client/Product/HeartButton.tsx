// Import các thư viện
import { useEffect, useState } from "react";
import { message, notification } from "antd";

// Import các icon
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

// Import các interface
import { IFavoriteUser } from "../../../interface";

// Type để truyền dữ liệu giữa các props
type HeartButtonProps = {
  productId: string | undefined;
  favoriteUser: IFavoriteUser[] | undefined;
};

// Khởi tạo component
const HeartButton = ({ productId, favoriteUser }: HeartButtonProps) => {
  // Sử dụng hook
  const [hasFavorite, setHasFavorite] = useState(false);

  const [api, contextHolder] = notification.useNotification();

  const toggleFavorite = () => {
    if (!favoriteUser) {
      api.warning({
        message: "Bạn chưa đăng nhập",
        description: "Vui lòng đăng nhập để thực hiện hành động này!",
        placement: "topRight",
      });

      return;
    }

    if (hasFavorite) {
      message.warning("Hủy yêu thích thành công!");

      setHasFavorite(false);
    } else {
      message.success("Yêu thích thành công!");

      setHasFavorite(true);
    }
  };

  useEffect(() => {
    let isFavorite = false;

    if (favoriteUser && favoriteUser) {
      isFavorite = favoriteUser.some(
        (favorite) => favorite.productId === productId
      );
    }

    setHasFavorite(isFavorite || false);
  }, [productId, favoriteUser]);

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
