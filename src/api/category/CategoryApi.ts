import { APIRequestError } from "../errors/APIRequestError";
import { ICategoryApi } from "./ICategoryApi";

export class CategoryApi implements ICategoryApi {
  public async fetchCategories() {
    const url = "https://dummyjson.com/products/categories";
    const response = await fetch(url);
    if (!response.ok) {
      throw new APIRequestError(
        "FETCH_CATEGORIES_ERROR",
        "Failed to fetch categories",
      );
    }
    const data = await response.json();
    return data;
  }
}
