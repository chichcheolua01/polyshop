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
    cards: [
      {
        _id: "card1",
        card_holder_name: "TRAN VAN LUONG",
        card_number: 1010109072003,
        start_date: "10/18",
        end_date: "10/22",
        cvv: 123,
      },
      {
        _id: "card2",
        card_holder_name: "TRAN VAN LUONG",
        card_number: 9704224234880446,
        start_date: "10/19",
        end_date: "10/23",
        cvv: 123,
      },
    ],
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
    cards: [],
    order: [],
    favorite: [],
    role: "User",
  },
];
