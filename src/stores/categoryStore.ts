import { create } from "zustand";
import { Category } from "../core/entities/Category";
import { CategoryList } from "../features/categories/CategoryList";
import { getErrorMessage } from "../utils/getErrorMessage";
import { CATEGORIES_CACHE_TIME } from "../constants/cache";
import { createSelectors } from "./WithSelectors";

const categoryListUseCase = new CategoryList();

type CategoryStore = {
  isLoading: boolean;
  error?: string;
  lastFetched?: number;
  categories: Category[];
  selectedCategories: string[];

  fetchCategories: () => void;

  isCategorySelected: (categorySlug: string) => boolean;
  selectCategory: (categorySlug: string) => void;
  unselectCategory: (categorySlug: string) => void;

  toggleSelectedCategory: (categorySlug: string) => void;
  clearSelectedCategories: () => void;
};

const useCategoryStore = create<CategoryStore>((set, get) => {
  return {
    isLoading: false,
    error: undefined,
    lastFetched: undefined,
    categories: [],
    selectedCategories: [],

    fetchCategories: async () => {
      const loading = get().isLoading;
      if (loading) return;

      const now = Date.now();
      const lastFetched = get().lastFetched;

      if (lastFetched && now - lastFetched < CATEGORIES_CACHE_TIME) return;

      set({ isLoading: true, error: undefined });
      try {
        const categories = await categoryListUseCase.execute();

        set({ categories, lastFetched: now });
      } catch (error) {
        set({
          error: getErrorMessage(error),
        });
      } finally {
        set({ isLoading: false });
      }
    },

    isCategorySelected: (categorySlug) =>
      get().selectedCategories.includes(categorySlug),
    selectCategory: (categorySlug) => {
      set({
        selectedCategories: [...get().selectedCategories, categorySlug],
      });
    },
    unselectCategory: (categorySlug) =>
      set({
        selectedCategories: get().selectedCategories.filter(
          (c) => c !== categorySlug,
        ),
      }),

    toggleSelectedCategory: (categorySlug) =>
      get().selectedCategories.includes(categorySlug)
        ? get().unselectCategory(categorySlug)
        : get().selectCategory(categorySlug),
    clearSelectedCategories: () =>
      set({
        selectedCategories: [],
      }),
  };
});

export default createSelectors(useCategoryStore);
