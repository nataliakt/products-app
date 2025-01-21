export interface IProductApi {
  fetchPaginatedProducts: (limit: number, page: number) => Promise<any>;
  fetchProductById: (id: string) => Promise<any>;
}
