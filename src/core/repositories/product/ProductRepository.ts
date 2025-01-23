import { IProductRepository } from "./IProductRepository";
import { Product } from "../../entities/Product";
import { IProductApi } from "@/src/api/product/IProductApi";
import { ProductApi } from "@/src/api/product/ProductApi";
import { ProductMapper } from "../../mappers/ProductMapper";
import { SortBy, SortOrder } from "../../enums/Sort";

export class ProductRepository implements IProductRepository {
  private productApi: IProductApi;

  constructor(
    productApi: IProductApi = new ProductApi(ProductMapper.fields.join(",")),
  ) {
    this.productApi = productApi;
  }

  async getPaginatedProducts(
    limit: number,
    page: number,
    sortBy: SortBy,
    sortOrder: SortOrder,
  ): Promise<Product[]> {
    const apiResponse = await this.productApi.fetchPaginatedProducts(
      limit,
      page,
      sortBy,
      sortOrder,
    );

    const products = apiResponse.products.map(ProductMapper.toDomain);

    return products;
  }

  async getProductById(id: string): Promise<Product> {
    const apiResponse = await this.productApi.fetchProductById(id);
    return ProductMapper.toDomain(apiResponse);
  }
}
