import { GoHome } from "react-icons/go";
import { AiOutlineRight } from "react-icons/ai";

const Breadcrumb = () => {
  return (
    <>
      <div className="px-10 p-5 flex items-center gap-1 bg-white w-full rounded-xl">
        <GoHome className="text-rose-400 text-base" size={20} />

        <span className="text-sm text-gray-400">
          <AiOutlineRight />
        </span>

        <p className="text-gray-600 font-semibold text-lg">Sản phẩm</p>
      </div>
    </>
  );
};

export default Breadcrumb;
