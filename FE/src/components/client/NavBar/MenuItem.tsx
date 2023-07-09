// Import các thư viện
import { Link } from "react-router-dom";

// Import các icon
import { IconType } from "react-icons";

// Import các interface
import { IProfileList } from "../../../interface";

// Type để truyền dữ liệu giữa các props
type MenuItemProps = {
  label: string;
  icon?: IconType;
  active?: boolean;
  menuDrop?: IProfileList[] | undefined;
  onClick: () => void;
};

// Khởi tạo component
const MenuItem = ({
  label,
  icon: Icon,
  active,
  onClick,
  menuDrop,
}: MenuItemProps) => {
  return (
    <>
      <div className={`${menuDrop ? "border-b" : ""}`}>
        <div
          onClick={onClick}
          className={`px-4 z-10 py-3  transition font-semibold flex
          ${Icon ? `text-base` : ``}
          ${active ? `text-rose-500` : ``}
          ${menuDrop ? "flex flex-col" : ""}
        `}
        >
          <div className="flex gap-3">
            {Icon && <Icon size={25} />}
            {label}
          </div>

          {menuDrop &&
            menuDrop.map((item) => (
              <div
                key={item.name}
                className="text-gray-500 hover:text-rose-500 transition py-3 ml-8"
              >
                <Link to={`/profile/${item.url}`} className="font-normal">
                  {item.name}
                </Link>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default MenuItem;
