import { Rate } from "antd";

type StarButtonProps = {
  star?: number;
  disabled?: boolean;
};

const StarButton = ({ star, disabled }: StarButtonProps) => {
  return (
    <>
      <Rate allowHalf disabled={disabled} defaultValue={star} />
    </>
  );
};

export default StarButton;
