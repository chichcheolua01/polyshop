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
