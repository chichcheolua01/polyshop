// Import các thư viện
import { useState } from "react";
import { TreeSelect } from "antd";

// Import các interface
import { ICategoryProduct } from "../../../../interface";

// Type để truyền dữ liệu giữa các props
type SelectProductProps = {
  categories: ICategoryProduct[] | null;
};

const { SHOW_PARENT } = TreeSelect;

const treeData = [
  {
    title: "Danh mục",
    value: "Danh mục",
    key: "Danh mục",
    children: [
      {
        title: "Điện thoại",
        value: "Điện thoại",
        key: "Điện thoại",
      },
      {
        title: "Máy tính sách tay",
        value: "Máy tính sách tay",
        key: "Máy tính sách tay",
      },
      {
        title: "Đồng hồ",
        value: "Đồng hồ",
        key: "Đồng hồ",
      },
    ],
  },
  {
    title: "Thương hiệu",
    value: "Thương hiệu",
    key: "Thương hiệu",
    children: [
      {
        title: "Iphone",
        value: "Iphone",
        key: "Iphone",
      },
      {
        title: "Samsung",
        value: "Samsung",
        key: "Samsung",
      },
      {
        title: "Nokia",
        value: "Nokia",
        key: "Nokia",
      },
    ],
  },
];

// Khởi tạo component
const SelectProduct = ({ categories }: SelectProductProps) => {
  // Sử dụng hook
  const [value, setValue] = useState<string[]>([]);

  const onChange = (newValue: string[]) => {
    console.log("onChange ", newValue);
    setValue(newValue);
  };

  const tProps = {
    value,
    treeData,
    onChange,
    treeCheckable: true,
    showCheckedStrategy: SHOW_PARENT,
    placeholder: "Vui lòng chọn",
    style: {
      width: "100%",
    },
  };

  return (
    <>
      <TreeSelect {...tProps} />
    </>
  );
};

export default SelectProduct;
