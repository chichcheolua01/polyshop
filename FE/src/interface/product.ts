export interface IProduct {
  _id: string;
  sold: number;
  stars: number;
  price: number;
  category: ICategory;
  inventory: number;
  original_price: number;
  name: string;
  description: string;
  image: IImage[];
}

export interface ICategory {
  _id: string;
  name: string;
  slug: string;
}

export interface IImage {
  base_url: string;
}
