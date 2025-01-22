import Divider from "@/src/components/ds/Divider";
import Select from "@/src/components/ds/Select";
import { Category } from "@/src/core/entities/Category";
import { useCategories } from "@/src/hooks/category/useCategories";
import { FlatList, ListRenderItem, StyleSheet, Text, View } from "react-native";

export default function ProductListScreen() {
  const { categories, error, loading } = useCategories();

  const RenderItem: ListRenderItem<Category> = ({ item }) => (
    <Select
      label={item.name}
      checked
      onPress={() => {}}
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
    padding: 16,
  },
  category: {
    paddingVertical: 20,
  },
});
