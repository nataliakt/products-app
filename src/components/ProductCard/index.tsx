import { Product } from "@/src/core/entities/Product";
import { Card, Text } from "../ds";
import { StyleSheet, View } from "react-native";
import React from "react";
import FastImage from "@d11/react-native-fast-image";

export type ProductCardProps = Product & {
  onPress: (id: string) => void;
};

function ProductCard({
  id,
  onPress,
  thumbnail,
  title,
  price,
}: ProductCardProps) {
  return (
    <Card style={styles.card} onPress={() => onPress(id)}>
      <View>
        <FastImage
          source={{ uri: thumbnail, priority: FastImage.priority.high }}
          style={styles.image}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>

      <View style={styles.content}>
        <Text variant="h3" style={styles.title}>
          {title}
        </Text>
        <Text variant="body" style={styles.price}>
          {price.getFormatted()}
        </Text>
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

export default React.memo(ProductCard);
