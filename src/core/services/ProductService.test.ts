import { productsMock } from "@/src/tests/mocks/productsMock";
import { IProductRepository } from "../repositories/product/IProductRepository";
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
    const products = await productService.getPaginatedProducts(10, 0);
    expect(products).toEqual(productsMock);
  });

  it("should get paginated products in stock", async () => {
    const products = await productService.getPaginatedProductsInStock(10, 0);
    expect(products).toEqual(
      productsMock.filter((product) => product.stock > 0),
    );
  });

  it("should get a product by id", async () => {
    const product = await productService.getProductById("1");
    expect(product).toEqual(productsMock[0]);
  });
});
