// Import các thư viện
import { Popover } from "antd";
import { ReactNode } from "react";

// Type để truyền dữ liệu giữa các props
type NavBarItemProps = {
  label: string;
  active?: boolean;
  onClick?: () => void;
  bodyPopover?: ReactNode;
};

// Khởi tạo component
const NavBarItem = ({
  label,
  onClick,
  active,
  bodyPopover,
}: NavBarItemProps) => {
  return (
    <>
      {bodyPopover ? (
        <Popover content={bodyPopover}>
          <button
            className={
              active
                ? "text-white font-semibold"
                : "text-black hover:text-white transition font-semibold"
            }
            onClick={onClick}
          >
            {label}
          </button>
        </Popover>
      ) : (
        <button
          onClick={onClick}
          className={
            active
              ? "text-white font-semibold"
              : "text-black hover:text-white transition font-semibold"
          }
        >
          {label}
        </button>
      )}
    </>
  );
};

export default NavBarItem;
