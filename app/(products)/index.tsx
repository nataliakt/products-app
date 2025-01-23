import ListLayout from "@/src/components/ds/ListLayout";
import ErrorBoundary from "@/src/components/ErrorBoundary";
import ErrorTemplate from "@/src/components/templates/ErrorTemplate";
import ProductCard from "@/src/components/ProductCard";
import ProductsHeaderRight from "@/src/components/ProductsHeaderRight";
import { Product } from "@/src/core/entities/Product";
import { SortOrder } from "@/src/core/enums/Sort";
import { useProducts } from "@/src/hooks/product/useProducts";
import { router, Stack } from "expo-router";
import { ListRenderItem } from "react-native";
import LoadingTemplate from "@/src/components/templates/LoadingTemplate";

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

  if (loading && products.length === 0) {
    return <LoadingTemplate />;
  }

  const handleFilter = () => {
    router.push("/categories/modal");
  };

  const handleProductPress = (id: string) => {
    router.push(`/product/${id}`);
  };

  const ProductListRenderItem: ListRenderItem<Product> = ({ item }) => (
    <ProductCard {...item} onPress={handleProductPress} />
  );

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
      <ErrorBoundary
        hasError={!!error}
        fallback={
          <ErrorTemplate
            title="The products could not be loaded"
            button="Try Again"
            reload={fetchProducts}
          />
        }
      >
        <ListLayout
          data={products}
          renderItem={ProductListRenderItem}
          onRefresh={fetchProducts}
          refreshing={loading}
          contentInsetAdjustmentBehavior="automatic"
          onEndReachedThreshold={0.5}
          onEndReached={fetchMoreProducts}
        />
      </ErrorBoundary>
    </>
  );
}
