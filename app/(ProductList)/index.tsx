import { Text } from "@/src/components/ds";
import ListLayout from "@/src/components/ds/ListLayout";
import ProductCard from "@/src/components/ProductCard";
import { useProducts } from "@/src/hooks/product/useProducts";
import { Stack } from "expo-router";

export default function ProductListScreen() {
  const { loading, products, error, refetch, refetching } = useProducts();

  if (error) {
    return <Text variant="body">{error}</Text>;
  }

  if (loading) {
    return <Text variant="body">Loading...</Text>;
  }

  return (
    <>
      <Stack.Screen
        options={{
          title: "Products",
        }}
      />
      <ListLayout
        data={products}
        renderItem={({ item }) => <ProductCard {...item} />}
        onRefresh={refetch}
        refreshing={refetching}
      />
    </>
  );
}
