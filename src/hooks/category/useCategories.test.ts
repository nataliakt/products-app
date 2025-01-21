import { renderHook } from "@testing-library/react-hooks";
import { useCategories } from "./useCategories";
import { IUseCase } from "@/src/features/IUseCase";
import { Category } from "@/src/core/entities/Category";
import { categoriesMock } from "@/src/test/mocks/categoriesMock";

describe("useCategories", () => {
  let categoryListUseCase: IUseCase<Category[]>;

  beforeEach(() => {
    categoryListUseCase = {
      execute: jest.fn().mockResolvedValue(categoriesMock),
    };
  });

  it("should get all categories", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useCategories(categoryListUseCase),
    );

    await waitForNextUpdate();

    expect(result.current.categories).toEqual(categoriesMock);
  });
});
