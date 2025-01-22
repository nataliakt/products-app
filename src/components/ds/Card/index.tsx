import React from "react";
import { StyleSheet, View } from "react-native";

type CardProps = {
  children: React.ReactNode;
};

function Card({ children, ...props }: CardProps) {
  return (
    <View style={styles.card} {...props}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 12,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
});

export default React.memo(Card);
