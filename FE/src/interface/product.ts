export interface IProduct {
  _id: string;
  sold: number;
  stars: number;
  price: number;
  category: {
    _id: string;
    name: string;
    slug: string;
  };
  inventory: number;
  original_price: number;
  name: string;
  description: string;
  image: string;
}

export interface ICategory {
  _id: string;
  name: string;
  slug: string;
}
