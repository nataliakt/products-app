import { create } from "zustand";
import { getErrorMessage } from "../utils/getErrorMessage";
import { PRODUCTS_CACHE_TIME } from "../constants/cache";
import { ProductList } from "../features/products/ProductList";
import { Product } from "../core/entities/Product";
import { PAGINATION_LIMIT } from "../constants/pagination";
import { createSelectors } from "./WithSelectors";

const productListUseCase = new ProductList();

type ProductStore = {
  isLoading: boolean;
  isFetchingMore: boolean;
  error?: string;
  lastFetched?: number;
  currentPage: number;

  products: Product[];
  fetchProducts: () => void;
  fetchMoreProducts: () => void;
};

const useProductStore = create<ProductStore>((set, get) => {
  return {
    isLoading: false,
    isFetchingMore: false,
    error: undefined,
    lastFetched: undefined,
    currentPage: 0,

    products: [],
    fetchProducts: async () => {
      const loading = get().isLoading || get().isFetchingMore;
      if (loading) return;

      const now = Date.now();
      const lastFetched = get().lastFetched;

      if (lastFetched && now - lastFetched < PRODUCTS_CACHE_TIME) return;

      const currentPage = 0;
      set({ isLoading: true, error: undefined });
      try {
        const products = await productListUseCase.execute(
          PAGINATION_LIMIT,
          currentPage,
        );

        set({ products, lastFetched: now, currentPage });
      } catch (error) {
        set({
          error: getErrorMessage(error),
        });
      } finally {
        set({ isLoading: false });
      }
    },

    fetchMoreProducts: async () => {
      const loading = get().isLoading || get().isFetchingMore;
      if (loading) return;

      set({ isFetchingMore: true, error: undefined });

      const currentPage = get().currentPage + 1;
      const currentProducts = get().products;
      try {
        const products = await productListUseCase.execute(
          PAGINATION_LIMIT,
          currentPage,
        );

        set({ products: [...currentProducts, ...products], currentPage });
      } catch (error) {
        set({
          error: getErrorMessage(error),
        });
      } finally {
        set({ isFetchingMore: false });
      }
    },
  };
});

export default createSelectors(useProductStore);
