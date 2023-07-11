import { useState, useEffect } from "react";
import {
  Descriptions,
  Form,
  Button,
  Select,
} from "antd";


// Import các interface
import { ICategoryProduct } from "../../../interface";

const { Option } = Select;

// Type để truyền dữ liệu giữa các props
type Props = {
  cate: ICategoryProduct | undefined;
  isEdit: boolean;
};

// Khởi tạo component
const CategoriesDrawer = ({ cate, isEdit }: Props) => {
  // Sử dụng hook
  const [form] = Form.useForm();
  const [selectedSlug, setSelectedSlug] = useState("");

  const onFinish = (values: ICategoryProduct) => {
    console.log("Success:", values);
  };

  const handleSlugChange = (value: string) => {
    setSelectedSlug(value);
  };

  const slug = [
    { label: "Điện thoại", value: "Phone" },
    { label: "Máy tính", value: "Laptop" },
    { label: "Đồng hồ", value: "Watch" },
  ];
  
 const brand = {
    Phone: ["Phone 1", "Phone 2"],
    Laptop: ["Laptop 1", "Laptop 2", "Laptop 3"],
    Watch: ["Watch 1", "Watch 2", "Watch 3"],
  };

  useEffect(() => {
    if (selectedSlug) {
      const updatedCategory = {
        ...form.getFieldValue("category"),
        slug: selectedSlug,
        brand: null,
      };
      form.setFieldsValue({ category: updatedCategory });
    }
  }, [selectedSlug, form]);

  return (
    <>
      <Form
        form={form}
        name="DrawerForm"
        onFinish={onFinish}
        initialValues={cate || {}}
        autoComplete="off"
      >
        <Descriptions
          extra={
            <Button
              ghost
              type="primary"
              htmlType="submit"
              className={`${isEdit ? "block" : "hidden"}`}
            >
              Lưu
            </Button>
          }
          title={cate?._id}
          bordered
          column={{ xxl: 2, xl: 2, lg: 2, md: 2, sm: 2, xs: 1 }}
        >
       <Descriptions.Item label="Danh mục">
            <Form.Item
              name="slug"
              rules={[
                { required: true, message: "Danh mục không được để trống" },
              ]}
            >
              <Select
                options={slug}
                onChange={handleSlugChange}
                bordered={isEdit}
                className={`mt-5
                ${isEdit ? "" : "pointer-events-none"}
                `}
                suffixIcon={!isEdit ? null : undefined}
              />
            </Form.Item>
          </Descriptions.Item>

          <Descriptions.Item label="Thương hiệu">
            <Form.Item
              name="brand"
              rules={[
                { required: true, message: "Thương hiệu không được để trống" },
              ]}
            >
              <Select
                disabled={isEdit && !form.getFieldValue( "slug")}
                bordered={isEdit}
                suffixIcon={!isEdit ? null : undefined}
                className={`mt-5
                ${isEdit ? "" : "pointer-events-none"}
                `}
              >
                {(brand[form.getFieldValue( "slug")] || []).map(
                  (item:any) => (
                    <Option key={item} value={item}>
                      {item}
                    </Option>
                  )
                )}
              </Select>
            </Form.Item>
          </Descriptions.Item>
</Descriptions>
  </Form>
    </>
  );
};

export default CategoriesDrawer;