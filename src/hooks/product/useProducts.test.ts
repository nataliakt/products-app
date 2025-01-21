import { renderHook } from "@testing-library/react-hooks";
import { useProducts } from "./useProducts";
import { IUseCase } from "@/src/features/IUseCase";
import { Product } from "@/src/core/entities/Product";
import { productsMock } from "@/src/test/mocks/productsMock";

describe("useProducts", () => {
  let productListUseCase: IUseCase<Product[]>;

  beforeEach(() => {
    productListUseCase = {
      execute: jest.fn().mockResolvedValue(productsMock),
    };
  });

  it("should get all products", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useProducts(productListUseCase),
    );

    await waitForNextUpdate();

    expect(result.current.products).toEqual(productsMock);
  });
});
