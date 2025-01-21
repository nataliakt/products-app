import { Category } from "../../entities/Category";

export interface ICategoryService {
  getCategories(): Promise<Category[]>;
}
