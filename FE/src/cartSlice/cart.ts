import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CartState {
  items: any[]; // Thay any bằng kiểu dữ liệu của sản phẩm trong giỏ hàng của bạn
}

const initialState: any = {
  items: [],
};

// Tạo slice cho "cart"
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<any>) => {
      console.log(state);
      const newProduct = action.payload;
      const existProduct = state.items.find(
        (item: any) => item._id === newProduct.product._id
      );
      if (!existProduct) {
        state.items.push(newProduct);
      } else {
        existProduct.quantity += newProduct.quantity;
      }
    },
    increment: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      const item = state.items.find((item: any) => item._id === itemId);
      if (item) {
        item.quantity++;
      }
    },
    decrement: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      const item = state.items.find((item: any) => item._id === itemId);
      if (item) {
        item.quantity--;
        if (item.quantity < 1) {
          const confirm = window.confirm("Bạn có muốn xóa sản phẩm này không?");
          if (confirm) {
            state.items = state.items.filter(
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
      state.items = state.items.filter((item: any) => item._id !== itemId);
    },
    deleteAll: (state) => {
      state.items = [];
    },
  },
});
export const { add, increment, decrement, deleteProduct, deleteAll } =
  cartSlice.actions;
