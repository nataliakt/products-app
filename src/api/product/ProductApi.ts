import { APIRequestError } from "../errors/APIRequestError";
import { IProductApi } from "./IProductApi";

export class ProductApi implements IProductApi {
  constructor(private fields: string) {}

  public async fetchPaginatedProducts(limit: number, page: number) {
    const skip = limit * page;
    const url = `https://dummyjson.com/products/?limit=${limit}&skip=${skip}&select=${this.fields}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new APIRequestError(
        "FETCH_PRODUCTS_ERROR",
        "Failed to fetch products",
      );
    }
    const data = await response.json();
    return data;
  }

  public async fetchProductById(id: string) {
    const url = `https://dummyjson.com/products/${id}/?select=${this.fields}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new APIRequestError(
        "FETCH_PRODUCT_ERROR",
        "Failed to fetch product by id",
      );
    }
    const data = await response.json();
    return data;
  }
}
