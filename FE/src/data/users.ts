export const users = [
  {
    _id: "user1",
    name: "Administrator",
    email: "admin@gmail.com",
    password: "hashPasswordAdmin",
    phone: "0312345678",
    address: "Hà nội",
    image:
      "https://res.cloudinary.com/book-hotel/image/upload/v1687264620/AETT3080_apf04c.jpg",
    order: [
      {
        _id: "order1",
      },
    ],
    favorite: [
      {
        _id: "favorite1",
        userId: "user1",
        productId: "product1",
      },
      {
        _id: "favorite2",
        userId: "user1",
        productId: "product10",
      },
      {
        _id: "favorite3",
        userId: "user1",
        productId: "product15",
      },
    ],
    role: "Admin",
  },
  {
    _id: "user2",
    name: "UserManager",
    email: "user@gmail.com",
    password: "hashPasswordUser",
    phone: "0367370371",
    address: "Bắc Giang",
    image: "image2",
    order: [],
    favorite: [],
    role: "User",
  },
];
