import { CategoryApi } from "./CategoryApi";

describe("CategoryApi", () => {
  let categoryApi: CategoryApi;

  beforeEach(() => {
    categoryApi = new CategoryApi();
  });

  it("should fetch categories", async () => {
    const result = await categoryApi.fetchCategories();

    expect(result.length).toBeGreaterThan(0);
    expect(result[0]).toHaveProperty("slug");
    expect(result[0]).toHaveProperty("name");
  });
});
