import { Product } from "../../entities/Product";

export interface IProductService {
  getPaginatedProducts(limit: number, page: number): Promise<Product[]>;
  getPaginatedProductsInStock(limit: number, page: number): Promise<Product[]>;
  getProductById(id: string): Promise<Product>;
}
