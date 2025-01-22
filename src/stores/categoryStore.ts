import { create } from "zustand";
import { Category } from "../core/entities/Category";
import { CategoryList } from "../features/categories/CategoryList";
import { getErrorMessage } from "../utils/getErrorMessage";
import { CATEGORIES_CACHE_TIME } from "../constants/cache";

const categoryListUseCase = new CategoryList();

type CategoryStore = {
  isLoading: boolean;
  error?: string;
  lastFetched?: number;

  categories: Category[];
  fetchCategories: () => void;

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
    fetchCategories: async () => {
      const now = Date.now();
      const lastFetched = get().lastFetched;
      const categories = get().categories;

      if (
        lastFetched &&
        categories.length &&
        now - lastFetched < CATEGORIES_CACHE_TIME
      )
        return;

      set({ isLoading: true, error: undefined });
      try {
        const categories = await categoryListUseCase.execute();
        const keepSelection = categories.filter((c) => c.selected);
        categories.forEach((c) => {
          console.log(c, keepSelection);
          c.selected = keepSelection.some((s) => s.slug === c.slug);
        });

        set({ categories, lastFetched: now });
      } catch (error) {
        set({
          error: getErrorMessage(error),
        });
      } finally {
        set({ isLoading: false });
      }
    },

    selectCategory: (categorySlug) => {
      set({
        categories: get().categories.map((c) => {
          if (c.slug === categorySlug) {
            c.selected = true;
          }
          return c;
        }),
      });
    },
    unselectCategory: (categorySlug) =>
      set({
        categories: get().categories.map((c) => {
          if (c.slug === categorySlug) {
            c.selected = false;
          }
          return c;
        }),
      }),
    toggleSelectedCategory: (categorySlug) =>
      set({
        categories: get().categories.map((c) => {
          if (c.slug === categorySlug) {
            c.selected = !c.selected;
          }
          return c;
        }),
      }),
    clearSelectedCategories: () =>
      set({
        categories: get().categories.map((c) => {
          c.selected = false;
          return c;
        }),
      }),
  };
});

export { useCategoryStore };
