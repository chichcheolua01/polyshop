import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Avatar, List, Space, Rate, message, Popconfirm } from "antd";

import { AiFillLike, AiFillMessage } from "react-icons/ai";

import { Button, StarButton } from "../../..";
import { ICommentsProduct } from "../../../../interface";
import {
  useCreateCommentsMutation,
  useDeleteCommentsMutation,
} from "../../../../api/products";

type ProductCommentProps = {
  comments: ICommentsProduct[];
  product: string;
};

const ProductComment = ({ comments, product }: ProductCommentProps) => {
  const [isFeedback, setIsFeedback] = useState(false);
  const [selectedCommentId, setSelectedCommentId] = useState<
    string | undefined
  >("");
  const [comment, setComment] = useState("");
  const [stars, setStars] = useState(0);
  const [feedBack, setFeedback] = useState("");
  const [messageApi, contextHolder] = message.useMessage();
  const key = "delete";

  const [createComment, resultCreate] = useCreateCommentsMutation();
  const [deleteComment, resultDelete] = useDeleteCommentsMutation();

  const onFinish = () => {
    const data = {
      product,
      stars,
      comment,
    };

    if (stars === 0) {
      message.warning("Đánh giá không được để trống");
      return;
    }

    createComment(data)
      .unwrap()
      .then((response) => {
        message.success(response.message);
        setComment("");
        setStars(0);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onDeleteComment = (_id: string | undefined) => {
    deleteComment(_id);
  };

  const onFeedback = (_id: string | undefined) => {
    alert(_id);
  };

  const listComment = comments.map((cmt) => ({
    href: "/profile",
    _id: cmt._id,
    prefer: cmt.prefer,
    feed_back: cmt.feed_back,
    title: cmt.user.name,
    avatar: cmt.user.image,
    description: (
      <Rate
        allowHalf
        disabled={true}
        defaultValue={cmt.stars}
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

  useEffect(() => {
    if (resultDelete.isLoading) {
      messageApi.open({
        key,
        type: "loading",
        content: "Loading...",
      });
    }
    if (resultDelete.isSuccess) {
      messageApi.open({
        key,
        type: "success",
        content: "Xóa thành công!",
      });
    }
    if (resultDelete.isError) {
      messageApi.open({
        key,
        type: "error",
        content: "Đã có lỗi xảy ra!",
      });
    }
  }, [resultDelete, messageApi]);

  return (
    <>
      {contextHolder}

      <List
        size="large"
        itemLayout="vertical"
        pagination={{ pageSize: 10 }}
        dataSource={listComment}
        footer={
          <>
            <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200">
              <label
                htmlFor="comment"
                className="text-gray-500 text-ml font-medium"
              >
                Bình luận
              </label>
              <textarea
                id="comment"
                value={comment}
                rows={5}
                required
                placeholder={"Nhập bình luận của bạn ..."}
                onChange={(e) => setComment(e.target.value)}
                className="px-0 w-full text-sm text-gray-900 border-0 pt-3 focus:ring-0 focus:outline-none"
              />

              <StarButton star={stars} setStar={setStars} />
            </div>

            <div className="flex justify-center">
              <div>
                <Button
                  label="Bình luận"
                  onClick={onFinish}
                  disabled={resultCreate.isLoading}
                />
              </div>
            </div>
          </>
        }
        renderItem={(item) => (
          <>
            <List.Item
              key={item.title}
              extra={
                <div className="flex gap-3">
                  <Button
                    label={
                      isFeedback && selectedCommentId === item._id
                        ? "Hủy"
                        : "Phản hồi"
                    }
                    small
                    onClick={() => {
                      setIsFeedback(!isFeedback);
                      setSelectedCommentId(item._id);
                    }}
                    unBackground
                  />

                  <Popconfirm
                    okType="danger"
                    placement="top"
                    title="Bạn có muốn xóa bình luận này?"
                    description="Xóa bình luận"
                    onConfirm={() => onDeleteComment(item._id)}
                    okText="Đồng ý"
                    cancelText="Hủy"
                    disabled={resultDelete.isLoading}
                  >
                    <Button label="Xóa" small unBackground />
                  </Popconfirm>
                </div>
              }
              actions={[
                <IconText
                  icon={AiFillLike}
                  text={item.prefer || 0}
                  key="list-vertical-like-o"
                />,
                <IconText
                  icon={AiFillMessage}
                  text={item.feed_back.length || 0}
                  key="list-vertical-message"
                />,
              ]}
            >
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={<Link to={item.href}>{item.title}</Link>}
                description={item.description}
              />
              <p className="text-medium">{item.content}</p>

              {item.feed_back.map((feedback) => (
                <List.Item
                  key={feedback._id}
                  actions={[
                    <IconText
                      icon={AiFillLike}
                      text={feedback.prefer || 0}
                      key="list-vertical-like-o"
                    />,
                  ]}
                >
                  <List.Item.Meta
                    avatar={<Avatar src={feedback.user.image} />}
                    title={feedback.user.name}
                  />
                  {feedback.comment}
                </List.Item>
              ))}

              <div className="mt-4">
                {isFeedback && selectedCommentId === item._id ? (
                  <>
                    <div className="flex gap-5">
                      <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 w-full">
                        <label
                          htmlFor="feedback"
                          className="text-gray-500 text-ml font-medium"
                        >
                          Phản hồi
                        </label>

                        <textarea
                          id="feedback"
                          value={feedBack}
                          rows={2}
                          required
                          placeholder="Nhập phản hồi của bạn ..."
                          onChange={(e) => setFeedback(e.target.value)}
                          className="px-0 w-full text-sm text-gray-900 border-0 pt-3 focus:ring-0 focus:outline-none"
                        />
                      </div>

                      <div className="flex justify-center">
                        <div>
                          <Button
                            label="Phản hồi"
                            onClick={() => onFeedback(item._id)}
                          />
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
            </List.Item>
          </>
        )}
      />
    </>
  );
};

export default ProductComment;
