import { useState, useEffect, useCallback } from "react";
import { CategoryList } from "../../features/categories/CategoryList";
import { Category } from "../../core/entities/Category";
import { IUseCase } from "@/src/features/IUseCase";

const categoryListUseCase = new CategoryList();

export const useCategories = (
  categoryList: IUseCase<Category[]> = categoryListUseCase,
) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [refetching, setRefetching] = useState<boolean>(false);

  const fetchCategories = useCallback(async () => {
    try {
      const data = await categoryList.execute();
      setCategories(data);
    } catch (err) {
      console.log(err);
      setError("Failed to load categories");
    } finally {
      setLoading(false);
    }
  }, [categoryList]);

  const refetchCategories = async () => {
    setRefetching(true);
    await fetchCategories();
    setRefetching(false);
  };

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return { categories, loading, error, refetch: refetchCategories, refetching };
};
