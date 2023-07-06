import { Avatar, List, Space, Rate } from "antd";
import React, { useState } from "react";
import { AiFillLike, AiFillMessage } from "react-icons/ai";

import { Button } from "../../..";

type ProductCommentProps = {};

const ProductComment = (props: ProductCommentProps) => {
  const [comment, setComment] = useState("");

  const listComment = Array.from({ length: 3 }).map(() => ({
    href: "/profile",
    title: `Trần Văn Lương`,
    avatar: `https://res.cloudinary.com/book-hotel/image/upload/v1687264620/AETT3080_apf04c.jpg`,
    description: (
      <Rate allowHalf disabled={true} defaultValue={4} className="text-base" />
    ),
    content:
      "Very straight-to-point article. Really worth time reading. Thank you! But tools are just the instruments for the UX designers. The knowledge of the design tools are as important as the creation of the design strategy.",
  }));

  const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
    <Space className="hover:text-rose-300 text-base">
      {React.createElement(icon)}
      {text}
    </Space>
  );

  return (
    <>
      <List
        size="large"
        itemLayout="vertical"
        pagination={{ pageSize: 2 }}
        dataSource={listComment}
        footer={
          <>
            <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200">
              <label
                htmlFor="comment"
                className="text-gray-500 text-xl font-medium"
              >
                Bình luận
              </label>

              <textarea
                id="comment"
                rows={5}
                className="px-0 w-full text-sm text-gray-900 border-0 pt-3 focus:ring-0 focus:outline-none"
                placeholder="Nhập bình luận của bạn ..."
                required
              />
            </div>

            <div className="flex justify-center">
              <div>
                <Button label="Bình luận" onClick={() => alert("Bình luận")} />
              </div>
            </div>
          </>
        }
        renderItem={(item) => (
          <>
            <List.Item
              key={item.title}
              actions={[
                <IconText
                  icon={AiFillLike}
                  text="156"
                  key="list-vertical-like-o"
                />,
                <IconText
                  icon={AiFillMessage}
                  text="2"
                  key="list-vertical-message"
                />,
              ]}
            >
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={<a href={item.href}>{item.title}</a>}
                description={item.description}
              />
              {item.content}
            </List.Item>
          </>
        )}
      />
    </>
  );
};

export default ProductComment;
