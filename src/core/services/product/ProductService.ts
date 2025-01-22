import { IProductRepository } from "../../repositories/product/IProductRepository";
import { ProductRepository } from "../../repositories/product/ProductRepository";
import { Product } from "../../entities/Product";
import { IProductService } from "./IProductService";

const productRepositoryDefault = new ProductRepository();

export class ProductService implements IProductService {
  private productRepository: IProductRepository;

  constructor(
    productRepository: IProductRepository = productRepositoryDefault,
  ) {
    this.productRepository = productRepository;
  }

  async getPaginatedProducts(limit: number, page: number): Promise<Product[]> {
    return await this.productRepository.getPaginatedProducts(limit, page);
  }

  async getPaginatedProductsInStock(
    limit: number,
    page: number,
  ): Promise<Product[]> {
    return (
      await this.productRepository.getPaginatedProducts(limit, page)
    ).filter((product) => product.stock > 0);
  }

  async getProductById(id: string): Promise<Product> {
    return this.productRepository.getProductById(id);
  }
}
