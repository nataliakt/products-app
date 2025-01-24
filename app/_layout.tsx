import { Stack } from "expo-router";
import ErrorBoundary from "@/src/components/ErrorBoundary";
import {
  CategoriesHeaderLeft,
  CategoriesHeaderRight,
} from "@/src/components/CategoriesHeader";
import { Platform } from "react-native";

export default function RootLayout() {
  return (
    <ErrorBoundary>
      <Stack>
        <Stack.Screen
          name="(products)/index"
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
              Platform.OS === "ios" ? CategoriesHeaderLeft : undefined,
            headerRight: CategoriesHeaderRight,
          }}
        />
        <Stack.Screen
          name="product/[id]"
          options={{
            title: "Product",
          }}
        />
      </Stack>
    </ErrorBoundary>
  );
}
