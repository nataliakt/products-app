import Divider from "@/src/components/ds/Divider";
import Select from "@/src/components/ds/Select";
import { Category } from "@/src/core/entities/Category";
import useCategoryStore from "@/src/stores/categoryStore";
import { FlatList, ListRenderItem, StyleSheet } from "react-native";

export default function ProductListScreen() {
  const categories = useCategoryStore.use.categories();
  const toggleSelectedCategory = useCategoryStore.use.toggleSelectedCategory();
  const isCategorySelected = useCategoryStore.use.isCategorySelected();
  useCategoryStore.use.selectedCategories(); // Update screen when selected categories change

  const RenderItem: ListRenderItem<Category> = ({ item }) => (
    <Select
      label={item.name}
      checked={isCategorySelected(item.slug)}
      onPress={() => toggleSelectedCategory(item.slug)}
      style={styles.category}
    />
  );

  return (
    <FlatList
      data={categories}
      renderItem={RenderItem}
      ItemSeparatorComponent={Divider}
      contentContainerStyle={styles.container}
    />
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
