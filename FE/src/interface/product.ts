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
  stars: number;
  comment: string;
  prefer: number;
  feed_back: IFeedBackComment[];
}

export interface IFeedBackComment {
  _id: string;
  prefer: number;
  comment: string;
  user: IUserCommentProduct;
}

export interface IUserCommentProduct {
  _id: string;
  name: string;
  image: string;
}
