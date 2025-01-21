import { ProductService } from "../../core/services/ProductService";
import { Product } from "../../core/entities/Product";
import { IUseCase } from "../IUseCase";
import { IProductService } from "@/src/core/services/IProductService";

export class ProductList implements IUseCase<Product[]> {
  private productService: IProductService;

  constructor(productService: IProductService = new ProductService()) {
    this.productService = productService;
  }

  async execute(limit: number, page: number): Promise<Product[]> {
    return this.productService.getPaginatedProducts(limit, page);
  }
}
