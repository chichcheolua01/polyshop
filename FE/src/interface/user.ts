export interface IUser {
  _id?: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  image: string;
  cards: ICardUser[];
  order: IOrderUser[];
  favorite: IFavoriteUser[];
  role: string;
}

export interface IOrderUser {
  _id?: string;
}

export interface IFavoriteUser {
  _id?: string;
  userId: string;
  productId: string;
}

export interface ICardUser {
  _id?: string;
  card_holder_name: string;
  card_number: number;
  start_date: string;
  end_date: string;
  cvv: number;
}
