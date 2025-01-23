export interface IProductApi {
  fetchPaginatedProducts: (
    limit: number,
    page: number,
    sortBy: string,
    sortOrder: string,
  ) => Promise<any>;
  fetchProductById: (id: string) => Promise<any>;
}
