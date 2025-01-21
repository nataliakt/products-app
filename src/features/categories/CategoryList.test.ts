import { ICategoryService } from "@/src/core/services/category/ICategoryService";
import { CategoryList } from "./CategoryList";
import { categoriesMock } from "@/src/test/mocks/categoriesMock";

describe("CategoryList", () => {
  let productList: CategoryList;
  let categoryService: ICategoryService;

  beforeEach(() => {
    categoryService = {
      getCategories: jest.fn().mockResolvedValue(categoriesMock),
    };
    productList = new CategoryList(categoryService);
  });

  it("should get paginated category", async () => {
    const category = await productList.execute();
    expect(category).toEqual(categoriesMock);
  });
});
