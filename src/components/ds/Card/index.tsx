import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

type CardProps = TouchableOpacityProps & {
  children: React.ReactNode;
  onPress?: VoidFunction;
};

function Card({ children, onPress, ...props }: CardProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.card}
      disabled={!onPress}
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
