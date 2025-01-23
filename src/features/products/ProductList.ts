import { ProductService } from "../../core/services/product/ProductService";
import { Product } from "../../core/entities/Product";
import { IUseCase } from "../IUseCase";
import { IProductService } from "@/src/core/services/product/IProductService";
import { SortBy, SortOrder } from "@/src/core/enums/Sort";

export class ProductList implements IUseCase<Product[]> {
  private productService: IProductService;

  constructor(productService: IProductService = new ProductService()) {
    this.productService = productService;
  }

  async execute(
    limit: number,
    page: number,
    sortBy: SortBy,
    sortOrder: SortOrder,
  ): Promise<Product[]> {
    return this.productService.getPaginatedProducts(
      limit,
      page,
      sortBy,
      sortOrder,
    );
  }
}
