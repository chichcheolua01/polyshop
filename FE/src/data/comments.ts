export const comments = [
  {
    _id: "comment1",
    stars: 1,
    comment: "đây là ví dụ về cách comment",
    prefer: 10,
    feed_back: [
      {
        _id: "user2",
        user: {
          _id: "user2",
          name: "UserManager",
          image:
            "https://res.cloudinary.com/book-hotel/image/upload/v1687893031/689b4753-0529-46a2-9c6c-cdc66323d727_i4ix5b.jpg",
        },
        comment: "feed_back user 2",
        prefer: 0,
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
    stars: 4,
    comment: "đây là bình luận của user2",
    prefer: 0,
    feed_back: [],
    user: {
      _id: "user2",
      name: "UserManager",
      image:
        "https://res.cloudinary.com/book-hotel/image/upload/v1687893031/689b4753-0529-46a2-9c6c-cdc66323d727_i4ix5b.jpg",
    },
  },
];
