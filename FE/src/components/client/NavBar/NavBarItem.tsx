import { ReactNode } from "react";
import { Popover } from "antd";

type NavBarItemProps = {
  label: string;
  onClick?: () => void;
  active?: boolean;
  bodyPopover?: ReactNode;
};

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
          <div
            className={
              active
                ? "text-rose-500 cursor-default"
                : "text-black hover:text-rose-500 cursor-pointer transition"
            }
            onClick={onClick}
          >
            {label}
          </div>
        </Popover>
      ) : (
        <div
          onClick={onClick}
          className={
            active
              ? "text-rose-500 cursor-default"
              : "text-black hover:text-rose-500 cursor-pointer transition"
          }
        >
          {label}
        </div>
      )}
    </>
  );
};

export default NavBarItem;
