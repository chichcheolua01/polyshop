import { Tabs } from "antd";

type ProductTabProps = {
  description: string | undefined;
};

const ProductTab = ({ description }: ProductTabProps) => {
  const initialTabs = [
    { label: "Mô tả", children: description, key: "1" },
    {
      label: "Bình luận",
      children: (
        <>
          <div>123</div>
        </>
      ),
      key: "2",
    },
  ];

  return (
    <>
      <Tabs centered size="large" items={initialTabs} />
    </>
  );
};

export default ProductTab;
