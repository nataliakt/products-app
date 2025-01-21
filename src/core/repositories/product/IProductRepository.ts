import { Product } from "../../entities/Product";

export interface IProductRepository {
  getPaginatedProducts(limit: number, page: number): Promise<Product[]>;
  getProductById(id: string): Promise<Product>;
}
