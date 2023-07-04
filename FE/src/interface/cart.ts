export interface ICart {
  products: ICartItem[];
  totalPrice: number;
}
export interface ICartItem {
  product: IProductCart;
  quantity: number;
}

export interface IProductCart {
  _id?: string;
  name: string;
  price: number;
  inventory: number;
  image: string;
}
