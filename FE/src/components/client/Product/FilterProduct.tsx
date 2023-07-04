import { Radio } from "antd";

import { ICategories } from "../../../interface/category";
import { RadioChangeEvent } from "antd/es/radio";
import { useState } from "react";

type FilterProductProps = {
  filterSlug: string[];
  categories: ICategories[];
};

const FilterProduct = ({ filterSlug, categories }: FilterProductProps) => {
  const [category, setCategory] = useState("");
  const [slug, setSlug] = useState("");

  const onChangeCategory = (e: RadioChangeEvent) => {
    setCategory(e.target.value);
  };

  const onChangeSlug = (e: RadioChangeEvent) => {
    setSlug(e.target.value);
  };

  return (
    <>
      <div className="bg-[#ffffff] rounded-xl w-auto md:w-[50rem] mt-3 md:mt-0">
        <div className="p-3">
          <span className="text-base font-medium md:mr-0 mr-3">Danh mục</span>

          <Radio.Group
            onChange={onChangeSlug}
            value={slug}
            className="flex flex-row md:flex-col gap-1 mt-2"
          >
            {filterSlug.map((item) => (
              <Radio key={item} value={item}>
                {item}
              </Radio>
            ))}
          </Radio.Group>
        </div>

        <div className="p-3">
          <span className="text-base font-medium md:mr-0 mr-3">
            Thương hiệu
          </span>

          <Radio.Group
            onChange={onChangeCategory}
            value={category}
            className="grid grid-cols-4 md:flex md:flex-col gap-1 mt-2"
          >
            {categories.map((category) => (
              <Radio key={category._id} value={category.name}>
                {category.name}
              </Radio>
            ))}
          </Radio.Group>
        </div>
      </div>
    </>
  );
};

export default FilterProduct;
