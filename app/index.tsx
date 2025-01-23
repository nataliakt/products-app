import { Text } from "@/src/components/ds";
import ListLayout from "@/src/components/ds/ListLayout";
import ProductCard from "@/src/components/ProductCard";
import ProductsHeaderRight from "@/src/components/ProductsHeaderRight";
import { Product } from "@/src/core/entities/Product";
import { SortOrder } from "@/src/core/enums/Sort";
import { useProducts } from "@/src/hooks/product/useProducts";
import { router, Stack } from "expo-router";
import { ListRenderItem } from "react-native";

export default function ProductListScreen() {
  const {
    loading,
    products,
    error,
    fetchProducts,
    fetchMoreProducts,
    sortBy,
    onPressSort,
    sortOrder,
  } = useProducts();

  if (error) {
    return <Text variant="body">{error}</Text>;
  }

  if (loading && products.length === 0) {
    return <Text variant="body">Loading...</Text>;
  }

  const ProductListRenderItem: ListRenderItem<Product> = ({ item }) => (
    <ProductCard {...item} />
  );

  const handleFilter = () => {
    router.push("/categories/modal");
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerRight: () => (
            <ProductsHeaderRight
              onPressFilter={handleFilter}
              sortBy={sortBy}
              onPressSort={onPressSort}
              sortIcon={sortOrder === SortOrder.asc ? "arrow-up" : "arrow-down"}
            />
          ),
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
