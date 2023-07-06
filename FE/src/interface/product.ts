export interface IProduct {
  _id: string;
  sold: number;
  stars: number;
  price: number;
  category: ICategoryProduct;
  inventory: number;
  original_price: number;
  name: string;
  description: string;
  comments: ICommentsProduct[];
  image: IImageProduct[];
}

export interface ICategoryProduct {
  _id: string;
  name: string;
  slug: string;
}

export interface IImageProduct {
  base_url: string;
}

export interface ICommentsProduct {
  _id: string;
  user: IUserCommentProduct;
  evaluate: number;
  comment: string;
  like: number;
  feedback: IFeedBackComment[];
}

export interface IFeedBackComment {
  _id: string;
  like: number;
  comment: string;
  user: IUserCommentProduct;
}

export interface IUserCommentProduct {
  _id: string;
  name: string;
  image: string;
}
