import { ProductMapper } from "@/src/core/mappers/ProductMapper";
import { ProductApi } from "./ProductApi";

describe("ProductApi", () => {
  let productApi: ProductApi;

  beforeEach(() => {
    productApi = new ProductApi(ProductMapper.fields.join(","));
  });

  it("should fetch products", async () => {
    const result = await productApi.fetchPaginatedProducts(
      1,
      0,
      "rating",
      "desc",
    );

    expect(result.products.length).toBe(1);
    for (const property of ProductMapper.fields) {
      expect(result.products[0]).toHaveProperty(property);
    }
  });

  it("should fetch a product by id", async () => {
    const result = await productApi.fetchPaginatedProducts(
      1,
      0,
      "rating",
      "desc",
    );

    const id = result.products[0].id;
    const product = await productApi.fetchProductById(id);

    expect(product.id).toBe(id);

    for (const property of ProductMapper.fields) {
      expect(product).toHaveProperty(property);
    }
  });
});
