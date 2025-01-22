import Divider from "@/src/components/ds/Divider";
import Select from "@/src/components/ds/Select";
import { Category } from "@/src/core/entities/Category";
import { useCategoryStore } from "@/src/stores/categoryStore";
import { FlatList, ListRenderItem, StyleSheet } from "react-native";

export default function ProductListScreen() {
  const categories = useCategoryStore((state) => state.categories);
  const toggleSelectedCategory = useCategoryStore(
    (state) => state.toggleSelectedCategory,
  );

  const RenderItem: ListRenderItem<Category> = ({ item }) => (
    <Select
      label={item.name}
      checked={item.selected}
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
