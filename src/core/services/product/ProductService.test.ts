import { productsMock } from "@/src/test/mocks/productsMock";
import { IProductRepository } from "../../repositories/product/IProductRepository";
import { ProductService } from "./ProductService";

describe("ProductService", () => {
  let productService: ProductService;
  let productRepository: IProductRepository;

  beforeEach(() => {
    productRepository = {
      getPaginatedProducts: jest.fn().mockResolvedValue(productsMock),
      getProductById: jest.fn().mockResolvedValue(productsMock[0]),
    };
    productService = new ProductService(productRepository);
  });

  it("should get paginated products", async () => {
    const products = await productService.getPaginatedProducts(
      10,
      0,
      "rating",
      "desc",
    );
    expect(products).toEqual(productsMock);
  });

  it("should get a product by id", async () => {
    const product = await productService.getProductById("1");
    expect(product).toEqual(productsMock[0]);
  });
});
