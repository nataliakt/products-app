import { ProductService } from "../../core/services/product/ProductService";
import { Product } from "../../core/entities/Product";
import { IUseCase } from "../IUseCase";
import { IProductService } from "@/src/core/services/product/IProductService";

export class ProductById implements IUseCase<Product> {
  private productService: IProductService;

  constructor(productService: IProductService = new ProductService()) {
    this.productService = productService;
  }

  async execute(id: string): Promise<Product> {
    return this.productService.getProductById(id);
  }
}
