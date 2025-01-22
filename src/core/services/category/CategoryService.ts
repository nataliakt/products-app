import { ICategoryRepository } from "../../repositories/category/ICategoryRepository";
import { CategoryRepository } from "../../repositories/category/CategoryRepository";
import { Category } from "../../entities/Category";
import { ICategoryService } from "./ICategoryService";

const categoryRepositoryDefault = new CategoryRepository();

export class CategoryService implements ICategoryService {
  private categoryRepository: ICategoryRepository;

  constructor(
    categoryRepository: ICategoryRepository = categoryRepositoryDefault,
  ) {
    this.categoryRepository = categoryRepository;
  }

  async getCategories(): Promise<Category[]> {
    return await this.categoryRepository.getCategories();
  }
}
