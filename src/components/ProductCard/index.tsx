import { Product } from "@/src/core/entities/Product";
import { Card, Text } from "../ds";
import { StyleSheet, Image, View } from "react-native";
import { formatCurrency } from "@/src/utils/formatCurrency";

type ProductCardProps = Product & {
  onPress?: () => void;
};

export default function ProductCard({
  onPress,
  thumbnail,
  title,
  price,
}: ProductCardProps) {
  return (
    <Card onPress={onPress} accessibilityRole="link">
      <View style={styles.card}>
        <View>
          <Image source={{ uri: thumbnail }} style={styles.image} />
        </View>

        <View style={styles.content}>
          <Text variant="h3" style={styles.title}>
            {title}
          </Text>
          <Text variant="body" style={styles.price}>
            {formatCurrency(price)}
          </Text>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "nowrap",
    gap: 16,
  },
  image: {
    maxWidth: "auto",
    resizeMode: "contain",
    aspectRatio: 1,
    height: 100,
  },
  content: {
    flexDirection: "column",
    flexShrink: 1,
  },
  title: {
    marginBottom: 8,
  },
  price: {},
});
