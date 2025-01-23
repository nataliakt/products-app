import { Product } from "../../entities/Product";
import { SortBy, SortOrder } from "../../enums/Sort";

export interface IProductService {
  getPaginatedProducts(
    limit: number,
    page: number,
    sortBy: SortBy,
    sortOrder: SortOrder,
  ): Promise<Product[]>;
  getProductById(id: string): Promise<Product>;
}
