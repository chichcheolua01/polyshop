import { Rate } from "antd";

type Props = {
  star?: number;
  disabled?: boolean;
};

const StarButton = ({ star, disabled }: Props) => {
  return (
    <>
      <Rate allowHalf disabled={disabled} defaultValue={star} />
    </>
  );
};

export default StarButton;
