import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

type Props = {
  productId?: string;
  userId?: any | null;
};

const HeartButton = ({ productId, userId }: Props) => {
  const [hasFavorite, setHasFavorite] = useState(false);

  const toggleFavorite = () => {
    setHasFavorite(!hasFavorite);
  };

  return (
    <>
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
