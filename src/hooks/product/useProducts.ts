import useProductStore from "@/src/stores/productStore";
import useCategoryStore from "@/src/stores/categoryStore";
import { useEffect, useMemo } from "react";
import { SortBy, SortOrder } from "@/src/core/enums/Sort";
import { capitalizeFirstLetter } from "@/src/utils/capitalizeFirstLetter";

export const useProducts = () => {
  const products = useProductStore.use.products();
  const loading = useProductStore.use.isLoading();
  const error = useProductStore.use.error?.();

  const fetchProducts = useProductStore.use.fetchProducts();
  const fetchMoreProducts = useProductStore.use.fetchMoreProducts();
  const isFetchingMore = useProductStore.use.isFetchingMore();

  const selectedCategories = useCategoryStore.use.selectedCategories();

  const updateSort = useProductStore.use.updateSort();
  const sortBy = useProductStore.use.sortBy();
  const sortOrder = useProductStore.use.sortOrder();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const filteredProducts = useMemo(() => {
    if (selectedCategories.length === 0) {
      return products;
    }

    return products.filter((product) =>
      selectedCategories.includes(product.category),
    );
  }, [products, selectedCategories]);

  const onPressSort = () => {
    const shouldChangeSortBy = sortOrder === SortOrder.asc;

    let newSortBy = sortBy;
    let newSortOrder =
      sortOrder === SortOrder.asc ? SortOrder.desc : SortOrder.asc;

    if (shouldChangeSortBy) {
      newSortBy = sortBy === SortBy.price ? SortBy.rating : SortBy.price;
    }

    updateSort(newSortBy, newSortOrder);
  };

  return {
    products: filteredProducts,
    loading,
    error,
    fetchProducts,
    fetchMoreProducts,
    isFetchingMore,
    onPressSort,
    sortBy: capitalizeFirstLetter(sortBy),
    sortOrder,
  };
};
