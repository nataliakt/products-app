import { IProductService } from "@/src/core/services/product/IProductService";
import { ProductById } from "./ProductById";
import { productsMock } from "@/src/test/mocks/productsMock";

describe("ProductById", () => {
  let productById: ProductById;
  let productService: IProductService;

  beforeEach(() => {
    productService = {
      getPaginatedProducts: jest.fn(),
      getProductById: jest.fn().mockResolvedValue(productsMock[0]),
    };
    productById = new ProductById(productService);
  });

  it("should get the product by id", async () => {
    const products = await productById.execute("1");
    expect(products).toEqual(productsMock[0]);
  });
});
