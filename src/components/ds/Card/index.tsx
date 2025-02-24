import React from "react";
import { StyleSheet, TouchableOpacity, ViewProps } from "react-native";

type CardProps = ViewProps & {
  children: React.ReactNode;
  onPress?: () => void;
};

function Card({ children, style, onPress, ...props }: CardProps) {
  return (
    <TouchableOpacity
      disabled={!onPress}
      onPress={onPress}
      style={[styles.card, style]}
      {...props}
    >
      {children}
    </TouchableOpacity>
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
