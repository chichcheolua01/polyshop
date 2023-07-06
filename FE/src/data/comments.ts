export const comments = [
  {
    _id: "comment1",
    evaluate: 1,
    comment: "đây là ví dụ về cách comment",
    like: 10,
    feedback: [
      {
        _id: "user2",
        name: "UserManager",
        image:
          "https://res.cloudinary.com/book-hotel/image/upload/v1687893031/689b4753-0529-46a2-9c6c-cdc66323d727_i4ix5b.jpg",
        cmt: "feedback user 2",
      },
    ],
    user: {
      _id: "user1",
      name: "Administrator",
      image:
        "https://res.cloudinary.com/book-hotel/image/upload/v1687264620/AETT3080_apf04c.jpg",
    },
  },
  {
    _id: "comment2",
    evaluate: 4,
    comment: "đây là bình luận của user2",
    like: 0,
    feedback: [],
    user: {
      _id: "user2",
      name: "UserManager",
      image:
        "https://res.cloudinary.com/book-hotel/image/upload/v1687893031/689b4753-0529-46a2-9c6c-cdc66323d727_i4ix5b.jpg",
    },
  },
];
