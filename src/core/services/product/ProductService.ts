import { IProductRepository } from "../../repositories/product/IProductRepository";
import { ProductRepository } from "../../repositories/product/ProductRepository";
import { Product } from "../../entities/Product";
import { IProductService } from "./IProductService";
import { SortBy, SortOrder } from "../../enums/Sort";

const productRepositoryDefault = new ProductRepository();

export class ProductService implements IProductService {
  private productRepository: IProductRepository;

  constructor(
    productRepository: IProductRepository = productRepositoryDefault,
  ) {
    this.productRepository = productRepository;
  }

  async getPaginatedProducts(
    limit: number,
    page: number,
    sortBy: SortBy,
    sortOrder: SortOrder,
  ): Promise<Product[]> {
    return await this.productRepository.getPaginatedProducts(
      limit,
      page,
      sortBy,
      sortOrder,
    );
  }

  async getProductById(id: string): Promise<Product> {
    return this.productRepository.getProductById(id);
  }
}
