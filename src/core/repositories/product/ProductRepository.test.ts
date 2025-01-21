import { IProductApi } from "@/src/api/product/IProductApi";
import {
  productsMock,
  productsObjectMock,
} from "@/src/test/mocks/productsMock";
import { ProductRepository } from "./ProductRepository";

describe("ProductRepository", () => {
  let productRepository: ProductRepository;
  let productApi: IProductApi;

  beforeEach(() => {
    productApi = {
      fetchPaginatedProducts: jest.fn().mockResolvedValue(productsObjectMock),
      fetchProductById: jest
        .fn()
        .mockResolvedValue(productsObjectMock.products[0]),
    };
    productRepository = new ProductRepository(productApi);
  });

  it("should get paginated products", async () => {
    const products = await productRepository.getPaginatedProducts(10, 0);
    expect(products).toEqual(productsObjectMock.products);
  });

  it("should get a product by id", async () => {
    const product = await productRepository.getProductById("1");
    expect(product).toEqual(productsObjectMock.products[0]);
  });
});
