export const users = [
  {
    _id: "user1",
    name: "Administrator",
    email: "admin@gmail.com",
    password: "hashPasswordAdmin",
    phone: "0312345678",
    address: "Hà nội",
    image: "image1",
    order: [
      {
        _id: "order1",
      },
    ],
    favorite: [
      {
        _id: "favorite1",
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
