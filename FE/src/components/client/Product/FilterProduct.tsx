import { Radio } from "antd";
import { useNavigate } from "react-router-dom";

import { ICategories } from "../../../interface/category";
import { RadioChangeEvent } from "antd/es/radio";

type FilterProductProps = {
  searchSlug?: string;
  filterSlug: string[];
  searchValue: string;
  categories: ICategories[];
};

const FilterProduct = ({
  searchSlug,
  filterSlug,
  categories,
  searchValue,
}: FilterProductProps) => {
  const navigate = useNavigate();

  const onChangeCategory = (e: RadioChangeEvent) => {
    const selectedCategory = e.target.value;
    navigate(`/list-product/${searchSlug}?category=${selectedCategory}`);
  };

  const onChangeSlug = (e: RadioChangeEvent) => {
    const selectedSlug = e.target.value;
    navigate(`/list-product/${selectedSlug}`);
  };

  return (
    <>
      <div className="bg-[#ffffff] rounded-xl">
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

          <Radio.Group onChange={onChangeCategory} value={searchValue}>
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
