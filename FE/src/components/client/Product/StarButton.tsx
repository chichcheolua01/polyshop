import { AiFillStar, AiOutlineStar } from "react-icons/ai";

type Props = {
  star?: number;
};

const StarButton = ({ star }: Props) => {
  const renderStars = () => {
    const filledStars = star || 0;

    const stars = [];

    for (let i = 0; i < 5; i++) {
      stars.push(
        i < filledStars ? (
          <AiFillStar key={`filled-${i}`} className="text-yellow-500" />
        ) : (
          <AiOutlineStar key={`empty-${i}`} />
        )
      );
    }

    return stars;
  };

  return (
    <>
      <div className="flex">{renderStars()}</div>
    </>
  );
};

export default StarButton;
