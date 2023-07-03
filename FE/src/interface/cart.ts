export interface ICart {
  products: IProductCart[];
  totalPrice: number;
}

export interface IProductCart {
  _id?: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}
