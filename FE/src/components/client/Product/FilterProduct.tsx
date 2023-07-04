import { Radio } from "antd";

import { ICategories } from "../../../interface/category";
import { RadioChangeEvent } from "antd/es/radio";

type FilterProductProps = {
  searchSlug?: string;
  filterSlug: string[];
  searchCategory: string;
  searchSort: string;
  categories: ICategories[];
  updateURL: (slug: string | undefined, category: string, sort: string) => void;
};

const FilterProduct = ({
  searchSlug,
  filterSlug,
  categories,
  searchCategory,
  searchSort,
  updateURL,
}: FilterProductProps) => {
  const onChangeCategory = (e: RadioChangeEvent) => {
    const selectedCategory = e.target.value;
    updateURL(searchSlug, selectedCategory, searchSort);
  };

  const onChangeSlug = (e: RadioChangeEvent) => {
    const selectedSlug = e.target.value;
    updateURL(selectedSlug, searchCategory, searchSort);
  };

  return (
    <>
      <div className="bg-[#ffffff] rounded-xl w-auto md:w-[50rem] mt-3 md:mt-0">
        <div className="p-3">
          <span className="text-base font-medium md:mr-0 mr-3">Danh mục</span>

          <Radio.Group onChange={onChangeSlug} value={searchSlug}>
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
            value={searchCategory}
            style={{ width: "70%" }}
          >
            {categories
              .filter((category) => category.slug === searchSlug)
              .map((category) => (
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
