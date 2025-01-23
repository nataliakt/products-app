import { renderHook } from "@testing-library/react-hooks";
import { useProducts } from "./useProducts";
import { productsMock as mockProducts } from "@/src/test/mocks/productsMock";

jest.mock("@/src/stores/productStore", () => ({
  use: {
    products: jest.fn(() => mockProducts),
    isLoading: jest.fn(() => false),
    error: jest.fn(() => null),
    fetchProducts: () => jest.fn(),
    fetchMoreProducts: jest.fn(),
    isFetchingMore: jest.fn(() => false),
    updateSort: jest.fn(),
    sortBy: jest.fn(() => "price"),
    sortOrder: jest.fn(() => "asc"),
  },
}));

describe("useProducts", () => {
  it("should get all products", async () => {
    const { result } = renderHook(() => useProducts());

    expect(result.current.products).toEqual(mockProducts);
  });
});
