// Import các thư viện
import { Rate } from "antd";

// Type để truyền dữ liệu giữa các props
type StarButtonProps = {
  star: number | undefined;
  disabled?: boolean;
};

// Khởi tạo component
const StarButton = ({ star, disabled }: StarButtonProps) => {
  return (
    <>
      <Rate allowHalf disabled={disabled} defaultValue={star} />
    </>
  );
};

export default StarButton;
