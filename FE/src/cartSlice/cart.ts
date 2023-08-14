import { PayloadAction, createSlice, current } from "@reduxjs/toolkit";

interface CartState {
  products: any[]; // Thay any bằng kiểu dữ liệu của sản phẩm trong giỏ hàng của bạn
}

const initialState: any = {
  user: "",
  products: [],
};

// Tạo slice cho "cart"
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<any>) => {
      const newProduct = action.payload;
      console.log(action.payload);
      const existProductIndex = state.products.findIndex(
        (item: any) => item.product._id === newProduct.product._id
      );
      if (existProductIndex == -1) {
        state.products.push(newProduct);
      } else {
        state.products[existProductIndex].quantity++;
      }
    },
    increment: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      const item = state.products.find(
        (item: any) => item.product._id === itemId
      );
      if (item) {
        item.quantity++;
      }
    },
    decrement: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      const item = state.products.find((item: any) => item._id === itemId);
      if (item) {
        item.quantity--;
        if (item.quantity < 1) {
          const confirm = window.confirm("Bạn có muốn xóa sản phẩm này không?");
          if (confirm) {
            state.products = state.products.filter(
              (item: any) => item._id !== itemId
            );
          } else {
            item.quantity = 1;
          }
        }
      }
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      state.products = state.products.filter(
        (item: any) => item._id !== itemId
      );
    },
    deleteAll: (state) => {
      state.products = [];
    },
  },
});
export const { add, increment, decrement, deleteProduct, deleteAll } =
  cartSlice.actions;
