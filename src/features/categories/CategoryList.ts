import { CategoryService } from "../../core/services/category/CategoryService";
import { Category } from "../../core/entities/Category";
import { IUseCase } from "../IUseCase";
import { ICategoryService } from "@/src/core/services/category/ICategoryService";

export class CategoryList implements IUseCase<Category[]> {
  private categoryService: ICategoryService;

  constructor(categoryService: ICategoryService = new CategoryService()) {
    this.categoryService = categoryService;
  }

  async execute(): Promise<Category[]> {
    return this.categoryService.getCategories();
  }
}
