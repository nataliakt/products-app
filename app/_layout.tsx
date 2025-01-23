import { Button } from "@/src/components/ds";
import { router, Stack } from "expo-router";
import useCategoryStore from "@/src/stores/categoryStore";
import { Platform, View } from "react-native";

export default function RootLayout() {
  const clearSelectedCategories =
    useCategoryStore.use.clearSelectedCategories();

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Products",
        }}
      />
      <Stack.Screen
        name="categories/modal"
        options={{
          title: "Categories",
          presentation: "modal",
          headerLeft:
            Platform.OS === "ios"
              ? () => (
                  <Button
                    title="Done"
                    icon="check"
                    size="small"
                    onPress={() => router.back()}
                  />
                )
              : undefined,
          headerRight: () => (
            <View style={{ flexDirection: "row", gap: 8 }}>
              <Button
                title="Clear Filter"
                variant="danger"
                size="small"
                onPress={clearSelectedCategories}
              />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="product/[id]"
        options={{
          title: "Product",
        }}
      />
    </Stack>
  );
}
