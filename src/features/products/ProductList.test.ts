import { IProductService } from "@/src/core/services/product/IProductService";
import { ProductList } from "./ProductList";
import { productsMock } from "@/src/test/mocks/productsMock";
import { SortBy, SortOrder } from "@/src/core/enums/Sort";

describe("ProductList", () => {
  let productList: ProductList;
  let productService: IProductService;

  beforeEach(() => {
    productService = {
      getPaginatedProducts: jest.fn().mockResolvedValue(productsMock),
      getProductById: jest.fn(),
    };
    productList = new ProductList(productService);
  });

  it("should get paginated products", async () => {
    const products = await productList.execute(
      10,
      0,
      SortBy.price,
      SortOrder.asc,
    );
    expect(products).toEqual(productsMock);
  });
});
