import { ICategoryRepository } from "./ICategoryRepository";
import { Category } from "../../entities/Category";
import { ICategoryApi } from "@/src/api/category/ICategoryApi";
import { CategoryApi } from "@/src/api/category/CategoryApi";
import { CategoryMapper } from "../../mappers/CategoryMapper";

export class CategoryRepository implements ICategoryRepository {
  private categoryApi: ICategoryApi;

  constructor(categoryApi: ICategoryApi = new CategoryApi()) {
    this.categoryApi = categoryApi;
  }

  async getCategories(): Promise<Category[]> {
    const apiResponse = await this.categoryApi.fetchCategories();

    const categories = apiResponse.map(CategoryMapper.toDomain);

    return categories;
  }
}
