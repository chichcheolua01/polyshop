import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <>
      <div className="border-[1px] w-full md:w-auto p-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
        <div className="flex flex-row items-center justify-between text-sm">
          <input type="text" className="outline-none rounded-full p-2" />

          <div className="p-2 bg-black rounded-full text-white">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
