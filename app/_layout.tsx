import HeaderOptionsButton from "@/src/components/HeaderOptionsButton";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Products",
          headerSearchBarOptions: {},
          headerRight: () => <HeaderOptionsButton />,
        }}
      />
      <Stack.Screen
        name="categories/modal"
        options={{
          title: "Filter by Category",
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
  );
}
