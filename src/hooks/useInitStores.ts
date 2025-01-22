import { useEffect } from "react";
import { useCategoryStore } from "../stores/categoryStore";

export function useInitStores() {
  const fetchCategories = useCategoryStore((state) => state.fetchCategories);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);
}
