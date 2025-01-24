import { Platform, StyleSheet, View } from "react-native";
import { Button } from "../ds";
import { router } from "expo-router";
import useCategoryStore from "../../stores/categoryStore";

export function CategoriesHeaderLeft() {
  if (Platform.OS === "android") {
    return <></>;
  }

  return (
    <Button
      title="Done"
      icon="check"
      size="small"
      onPress={() => router.back()}
    />
  );
}

export function CategoriesHeaderRight() {
  const clearSelectedCategories =
    useCategoryStore.use.clearSelectedCategories();

  return (
    <View style={styles.right}>
      <Button
        title="Clear Filter"
        variant="danger"
        size="small"
        onPress={clearSelectedCategories}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  right: {
    flexDirection: "row",
    gap: 8,
  },
});
