import { ProductApi } from "./ProductApi";

describe("ProductApi", () => {
  let productApi: ProductApi;

  beforeEach(() => {
    productApi = new ProductApi("id,title,price");
  });

  it("should fetch products", async () => {
    const result = await productApi.fetchPaginatedProducts(1, 0);

    expect(result.products.length).toBe(1);
    expect(result.products[0]).toHaveProperty("id");
    expect(result.products[0]).toHaveProperty("title");
    expect(result.products[0]).toHaveProperty("price");
  });

  it("should fetch a product by id", async () => {
    const result = await productApi.fetchPaginatedProducts(1, 0);

    const id = result.products[0].id;
    const product = await productApi.fetchProductById(id);

    expect(product.id).toBe(id);
    expect(product).toHaveProperty("title");
    expect(product).toHaveProperty("price");
  });
});
