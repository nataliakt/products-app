import { Text } from "@/src/components/ds";
import Divider from "@/src/components/ds/Divider";
import { useProduct } from "@/src/hooks/product/useProduct";
import { useLocalSearchParams } from "expo-router";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

type ProductScreenParams = {
  id: string;
};

export default function ProductScreen() {
  const { id } = useLocalSearchParams<ProductScreenParams>();
  const { product, loading } = useProduct(id);

  if (loading) {
    return <Text variant="body">Loading...</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product?.images[0] }} style={styles.image} />
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
