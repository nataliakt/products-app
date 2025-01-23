import Divider from "@/src/components/ds/Divider";
import Select from "@/src/components/ds/Select";
import ErrorBoundary from "@/src/components/ErrorBoundary";
import ErrorTemplate from "@/src/components/ErrorTemplate";
import { Category } from "@/src/core/entities/Category";
import useCategoryStore from "@/src/stores/categoryStore";
import { useEffect } from "react";
import { FlatList, ListRenderItem, StyleSheet } from "react-native";

export default function ProductListScreen() {
  const fetchCategories = useCategoryStore.use.fetchCategories();
  const categories = useCategoryStore.use.categories();
  const toggleSelectedCategory = useCategoryStore.use.toggleSelectedCategory();
  const isCategorySelected = useCategoryStore.use.isCategorySelected();
  useCategoryStore.use.selectedCategories(); // Update screen when selected categories change

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const RenderItem: ListRenderItem<Category> = ({ item }) => (
    <Select
      label={item.name}
      checked={isCategorySelected(item.slug)}
      onPress={() => toggleSelectedCategory(item.slug)}
      style={styles.category}
    />
  );

  return (
    <ErrorBoundary
      fallback={
        <ErrorTemplate
          title="The categories could not be loaded"
          button="Try Again"
          reload={fetchCategories}
        />
      }
    >
      <FlatList
        data={categories}
        renderItem={RenderItem}
        ItemSeparatorComponent={Divider}
        contentContainerStyle={styles.container}
      />
    </ErrorBoundary>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  category: {
    paddingVertical: 20,
  },
});
