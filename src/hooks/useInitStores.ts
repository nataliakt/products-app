import { useEffect } from "react";
import useCategoryStore from "../stores/categoryStore";
import useProductStore from "../stores/productStore";

export function useInitStores() {
  const fetchCategories = useCategoryStore.use.fetchCategories();
  const fetchProducts = useProductStore.use.fetchProducts();

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, [fetchCategories, fetchProducts]);
}
