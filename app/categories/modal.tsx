import {
  CategoriesHeaderLeft,
  CategoriesHeaderRight,
} from "@/src/components/CategoriesHeader";
import Divider from "@/src/components/ds/Divider";
import Select from "@/src/components/ds/Select";
import ErrorBoundary from "@/src/components/ErrorBoundary";
import ErrorTemplate from "@/src/components/templates/ErrorTemplate";
import LoadingTemplate from "@/src/components/templates/LoadingTemplate";
import { Category } from "@/src/core/entities/Category";
import useCategoryStore from "@/src/stores/categoryStore";
import { Stack } from "expo-router";
import { useEffect } from "react";
import { FlatList, ListRenderItem, StyleSheet } from "react-native";

export default function ProductListScreen() {
  const fetchCategories = useCategoryStore.use.fetchCategories();
  const isLoading = useCategoryStore.use.isLoading();
  const error = useCategoryStore.use.error?.();

  const categories = useCategoryStore.use.categories();
  const toggleSelectedCategory = useCategoryStore.use.toggleSelectedCategory();
  const isCategorySelected = useCategoryStore.use.isCategorySelected();
  useCategoryStore.use.selectedCategories(); // Update screen when selected categories change

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  if (isLoading) {
    return <LoadingTemplate />;
  }

  const RenderItem: ListRenderItem<Category> = ({ item }) => (
    <Select
      label={item.name}
      checked={isCategorySelected(item.slug)}
      onPress={() => toggleSelectedCategory(item.slug)}
      style={styles.category}
    />
  );

  return (
    <>
      <Stack.Screen
        options={{
          headerLeft: () => <CategoriesHeaderLeft />,
          headerRight: () => <CategoriesHeaderRight />,
        }}
      />
      <ErrorBoundary
        hasError={!!error}
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
    </>
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
