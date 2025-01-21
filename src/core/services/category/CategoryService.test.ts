import { categoriesMock } from "@/src/test/mocks/categoriesMock";
import { ICategoryRepository } from "../../repositories/category/ICategoryRepository";
import { CategoryService } from "./CategoryService";

describe("CategoryService", () => {
  let categoryService: CategoryService;
  let categoryRepository: ICategoryRepository;

  beforeEach(() => {
    categoryRepository = {
      getCategories: jest.fn().mockResolvedValue(categoriesMock),
    };
    categoryService = new CategoryService(categoryRepository);
  });

  it("should get all categories", async () => {
    const categories = await categoryService.getCategories();
    expect(categories).toEqual(categoriesMock);
  });
});
