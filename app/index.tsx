import { Text } from "@/src/components/ds";
import ListLayout from "@/src/components/ds/ListLayout";
import ProductCard from "@/src/components/ProductCard";
import { Product } from "@/src/core/entities/Product";
import { useProducts } from "@/src/hooks/product/useProducts";
import { ListRenderItem } from "react-native";

export default function ProductListScreen() {
  const { loading, products, error, refetch, refetching } = useProducts();

  if (error) {
    return <Text variant="body">{error}</Text>;
  }

  if (loading) {
    return <Text variant="body">Loading...</Text>;
  }

  const ProductListRenderItem: ListRenderItem<Product> = ({ item }) => (
    <ProductCard {...item} />
  );

  return (
    <ListLayout
      data={products}
      renderItem={ProductListRenderItem}
      onRefresh={refetch}
      refreshing={refetching}
      contentInsetAdjustmentBehavior="automatic"
    />
  );
}
