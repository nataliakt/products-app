import useProductStore from "@/src/stores/productStore";
import useCategoryStore from "@/src/stores/categoryStore";
import { useMemo } from "react";

export const useProducts = () => {
  const products = useProductStore.use.products();
  const loading = useProductStore.use.isLoading();
  const error = useProductStore.use.error?.();
  const fetchProducts = useProductStore.use.fetchProducts();
  const fetchMoreProducts = useProductStore.use.fetchMoreProducts();
  const isFetchingMore = useProductStore.use.isFetchingMore();

  const selectedCategories = useCategoryStore.use.selectedCategories();

  const filteredProducts = useMemo(() => {
    if (selectedCategories.length === 0) {
      return products;
    }

    return products.filter((product) =>
      selectedCategories.includes(product.category),
    );
  }, [products, selectedCategories]);

  return {
    products: filteredProducts,
    loading,
    error,
    fetchProducts,
    fetchMoreProducts,
    isFetchingMore,
  };
};
