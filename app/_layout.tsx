import { Stack } from "expo-router";
import ErrorBoundary from "@/src/components/ErrorBoundary";

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
