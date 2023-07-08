export const orders = [
  {
    _id: "order1",
    userId: "user1",
    products: [
      {
        product: "product1",
        name: "iPhone 14 Pro Max 128GB | Chính hãng VN/A",
        price: 24690000,
        quantity: 1,
      },
      {
        product: "product2",
        name: "Samsung Galaxy S23 Ultra 256GB",
        price: 23990000,
        quantity: 1,
      },
    ],
    totalPrice: 48680000,
    paymentMethod: "Thanh toán bằng thẻ",
    payment: "payment1",
    status: "Đang giao hàng",
  },
  {
    _id: "order2",
    userId: "user1",
    products: [
      {
        product: "product1",
        name: "iPhone 14 Pro Max 128GB | Chính hãng VN/A",
        price: 24690000,
        quantity: 10,
      },
    ],
    totalPrice: 246900000,
    paymentMethod: "Thanh toán khi nhận hàng",
    status: "Đang xử lý",
  },
];
