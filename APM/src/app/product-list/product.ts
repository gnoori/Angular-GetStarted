export interface IProduct {
  productId: number | null;
  productName: string;
  productCode: string;
  category: string;
  tags?: string[];
  releaseDate: string;
  price: number;
  description: string;
  starRating: number;
  imageUrl: string;
}

export interface ProductResolved {
  product: IProduct | null;
  error?: string;
}
