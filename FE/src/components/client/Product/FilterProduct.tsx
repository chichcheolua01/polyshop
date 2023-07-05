import { Radio } from "antd";
import { useState } from "react";
import { RadioChangeEvent } from "antd/es/radio";

import { ICategories } from "../../../interface";

type FilterProductProps = {
  categories: ICategories[];
};

const FilterProduct = ({ categories }: FilterProductProps) => {
  const [category, setCategory] = useState("");
  const [slug, setSlug] = useState("");

  const onChangeCategory = (e: RadioChangeEvent) => {
    setCategory(e.target.value);
  };

  const onChangeSlug = (e: RadioChangeEvent) => {
    setSlug(e.target.value);
  };

  const filterSlug = [...new Set(categories.map((category) => category.slug))];

  return (
    <>
      <div>
        <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium mt-3">
          Danh mục
        </h3>

        <div className="space-y-2">
          <Radio.Group
            onChange={onChangeSlug}
            value={slug}
            className="flex flex-col gap-1"
          >
            {filterSlug.map((item) => (
              <Radio key={item} value={item}>
                <div className="text-gray-600 cursor-pointer">{item}</div>
              </Radio>
            ))}
          </Radio.Group>
        </div>
      </div>

      <div>
        <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium mt-3">
          Thương hiệu
        </h3>

        <div className="space-y-2">
          <Radio.Group
            onChange={onChangeCategory}
            value={category}
            className="flex flex-col gap-1"
          >
            {categories.map((category) => (
              <Radio key={category._id} value={category.name}>
                <div className="text-gray-600 cursor-pointer">
                  {category.name}
                </div>
              </Radio>
            ))}
          </Radio.Group>
        </div>
      </div>
    </>
  );
};

export default FilterProduct;
