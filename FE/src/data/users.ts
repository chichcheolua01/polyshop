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
        products: [
          {
            _id: "product1",
            name: "iPhone 14 Pro Max 128GB | Chính hãng VN/A",
            price: 24690000,
            quantity: 1,
          },
          {
            _id: "product2",
            name: "Samsung Galaxy S23 Ultra 256GB",
            price: 23990000,
            quantity: 1,
          },
        ],
        totalPrice: 48680000,
        status: "Đang giao hàng",
      },
      {
        _id: "order2",
        products: [
          {
            _id: "product1",
            name: "iPhone 14 Pro Max 128GB | Chính hãng VN/A",
            price: 24690000,
            quantity: 10,
          },
        ],
        totalPrice: 246900000,
        status: "Đang xử lý",
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
    comments: [{ _id: "comment1" }],
    role: "Admin",
  },
  {
    _id: "user2",
    name: "UserManager",
    email: "user@gmail.com",
    password: "hashPasswordUser",
    phone: "0367370371",
    address: "Bắc Giang",
    image:
      "https://res.cloudinary.com/book-hotel/image/upload/v1687893031/689b4753-0529-46a2-9c6c-cdc66323d727_i4ix5b.jpg",
    cards: [],
    order: [],
    favorite: [],
    comments: [],
    role: "User",
  },
];
