export interface IUser {
  _id?: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  image: string;
  order: IOrderUser[];
  favorite: IFavoriteUser[];
  role: string;
}

export interface IOrderUser {
  _id: string;
}

export interface IFavoriteUser {
  _id: string;
  userId: string;
  productId: string;
}
