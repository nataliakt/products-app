import { ICategoryApi } from "@/src/api/category/ICategoryApi";
import {
  categoriesMock,
  categoriesObjectMock,
} from "@/src/test/mocks/categoriesMock";
import { CategoryRepository } from "./CategoryRepository";

describe("CategoryRepository", () => {
  let categoryRepository: CategoryRepository;
  let categoryApi: ICategoryApi;

  beforeEach(() => {
    categoryApi = {
      fetchCategories: jest.fn().mockResolvedValue(categoriesObjectMock),
    };
    categoryRepository = new CategoryRepository(categoryApi);
  });

  it("should get all categories", async () => {
    const categories = await categoryRepository.getCategories();
    expect(categories).toEqual(categoriesMock);
  });
});
