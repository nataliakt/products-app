import { Product } from "@/src/core/entities/Product";
import { Card, Text } from "../ds";
import { StyleSheet, Image, View, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";

type ProductCardProps = Product & {
  onPress?: () => void;
};

function ProductCard({
  onPress,
  id,
  thumbnail,
  title,
  price,
}: ProductCardProps) {
  return (
    <Link push href={`/product/${id}`} asChild>
      <TouchableOpacity>
        <Card style={styles.card}>
          <View>
            <Image source={{ uri: thumbnail }} style={styles.image} />
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
      </TouchableOpacity>
    </Link>
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
