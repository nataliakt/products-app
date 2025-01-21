import ListLayout from "@/src/components/ds/ListLayout";
import ProductCard from "@/src/components/ProductCard";
import { useProducts } from "@/src/hooks/useProducts";
import { Text } from "react-native";

export default function ProductListScreen() {
  const { loading, products, error, refetch, refetching } = useProducts();

  if (error) {
    return <Text>{error}</Text>;
  }

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <ListLayout
      data={products}
      renderItem={({ item }) => <ProductCard {...item} />}
      onRefresh={refetch}
      refreshing={refetching}
    />
  );
}
