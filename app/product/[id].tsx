import { Text } from "@/src/components/ds";
import Divider from "@/src/components/ds/Divider";
import { useProduct } from "@/src/hooks/product/useProduct";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import ErrorBoundary from "@/src/components/ErrorBoundary";
import ErrorTemplate from "@/src/components/templates/ErrorTemplate";
import FastImage from "@d11/react-native-fast-image";
import LoadingTemplate from "@/src/components/templates/LoadingTemplate";

type ProductScreenParams = {
  id: string;
};

export default function ProductScreen() {
  const { id } = useLocalSearchParams<ProductScreenParams>();
  const { product, loading, fetchProduct } = useProduct(id);

  if (loading) {
    return <LoadingTemplate />;
  }

  return (
    <ErrorBoundary
      fallback={
        <ErrorTemplate
          title="This product could not be loaded"
          button="Try Again"
          reload={fetchProduct}
        />
      }
    >
      <ScrollView style={styles.container}>
        <FastImage
          source={{
            uri: product?.images[0],
            priority: FastImage.priority.high,
          }}
          style={styles.image}
          resizeMode={FastImage.resizeMode.contain}
        />
        <Divider />
        <View style={styles.info}>
          <Text variant="h1" style={styles.title}>
            {product?.title}
          </Text>
          <Text variant="h2" style={styles.price}>
            {product?.price.getFormatted()}
          </Text>
          <Text variant="body">{product?.description}</Text>
          <Text variant="bodyBold">
            Rating: {product?.rating}{" "}
            <AntDesign name="star" size={16} color="black" />
          </Text>
          <Text variant="body">Stock: {product?.stock}</Text>
          <Text variant="body">Category: {product?.category}</Text>
        </View>
      </ScrollView>
    </ErrorBoundary>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  info: {
    gap: 8,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 8,
  },
  price: {
    fontWeight: "bold",
    marginVertical: 8,
  },
});
