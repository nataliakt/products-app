import { IProductRepository } from "./IProductRepository";
import { Product } from "../../entities/Product";
import { IProductApi } from "@/src/api/product/IProductApi";
import { ProductApi } from "@/src/api/product/ProductApi";

const fields = Object.keys(Product).join(",");

export class ProductRepository implements IProductRepository {
  private productApi: IProductApi;

  constructor(productApi: IProductApi = new ProductApi(fields)) {
    this.productApi = productApi;
  }

  async getPaginatedProducts(limit: number, page: number): Promise<Product[]> {
    const apiResponse = await this.productApi.fetchPaginatedProducts(
      limit,
      page,
    );

    const products = apiResponse.products.map((item: any) =>
      this.parseProduct(item),
    );

    return products;
  }

  async getProductById(id: string): Promise<Product> {
    const apiResponse = await this.productApi.fetchProductById(id);
    return this.parseProduct(apiResponse);
  }

  private parseProduct(item: any): Product {
    return new Product(
      item.id,
      item.title,
      item.price,
      item.description,
      item.rating,
      item.stock,
      item.thumbnail,
    );
  }
}
