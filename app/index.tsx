import { Text } from "@/src/components/ds";
import ListLayout from "@/src/components/ds/ListLayout";
import ProductCard from "@/src/components/ProductCard";
import ProductsHeaderRight from "@/src/components/ProductsHeaderRight";
import { Product } from "@/src/core/entities/Product";
import { useProducts } from "@/src/hooks/product/useProducts";
import { Stack } from "expo-router";
import { ListRenderItem } from "react-native";

export default function ProductListScreen() {
  const { loading, products, error, fetchProducts, fetchMoreProducts } =
    useProducts();

  if (error) {
    return <Text variant="body">{error}</Text>;
  }

  if (loading && products.length === 0) {
    return <Text variant="body">Loading...</Text>;
  }

  const ProductListRenderItem: ListRenderItem<Product> = ({ item }) => (
    <ProductCard {...item} />
  );

  return (
    <>
      <Stack.Screen
        options={{
          headerRight: () => <ProductsHeaderRight />,
        }}
      />
      <ListLayout
        data={products}
        renderItem={ProductListRenderItem}
        onRefresh={fetchProducts}
        refreshing={loading}
        contentInsetAdjustmentBehavior="automatic"
        onEndReachedThreshold={0.5}
        onEndReached={fetchMoreProducts}
        ListFooterComponent={
          loading ? <Text variant="body">Loading...</Text> : null
        }
      />
    </>
  );
}
