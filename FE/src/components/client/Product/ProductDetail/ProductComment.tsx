import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Avatar, List, Space, Rate } from "antd";
import { AiFillLike, AiFillMessage } from "react-icons/ai";

import { Button } from "../../..";
import { ICommentsProduct } from "../../../../interface";

type ProductCommentProps = {
  comments: ICommentsProduct[];
};

const ProductComment = ({ comments }: ProductCommentProps) => {
  const [comment, setComment] = useState("");

  const listComment = comments.map((cmt) => ({
    href: "/profile",
    like: cmt.like,
    feedback: cmt.feedback.length,
    title: cmt.user.name,
    avatar: cmt.user.image,
    description: (
      <Rate
        allowHalf
        disabled={true}
        defaultValue={cmt.evaluate}
        className="text-base"
      />
    ),
    content: cmt.comment,
  }));

  const IconText = ({ icon, text }: { icon: React.FC; text: number }) => (
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
                value={comment}
                rows={5}
                required
                placeholder="Nhập bình luận của bạn ..."
                onChange={(e) => setComment(e.target.value)}
                className="px-0 w-full text-sm text-gray-900 border-0 pt-3 focus:ring-0 focus:outline-none"
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
                  text={item.like || 0}
                  key="list-vertical-like-o"
                />,
                <IconText
                  icon={AiFillMessage}
                  text={item.feedback || 0}
                  key="list-vertical-message"
                />,
              ]}
            >
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={<Link to={item.href}>{item.title}</Link>}
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
