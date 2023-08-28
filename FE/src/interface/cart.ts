export interface ICart {
  products: IItemCart[];
  totalPrice: number;
  _id?: string;
}

export interface IItemCart {
  product: IProductCart;
  quantity: number;
}

export interface IProductCart {
  _id?: string;
  name: string;
  price: number;
  inventory: number;
  images: string;
}
