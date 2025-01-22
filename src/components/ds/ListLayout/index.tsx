import React from "react";
import { FlatList, FlatListProps, StyleSheet } from "react-native";
import { EdgeInsets, useSafeAreaInsets } from "react-native-safe-area-context";

type ListLayoutProps<ItemT> = FlatListProps<ItemT> & {
  gap?: number;
};

function ListLayout<ItemT>({
  gap,
  style,
  contentContainerStyle,
  ...props
}: ListLayoutProps<ItemT>) {
  const insets = useSafeAreaInsets();
  const styles = makeStyles(insets);

  return (
    <FlatList<ItemT>
      style={[styles.flatList, style]}
      contentContainerStyle={[styles.container, contentContainerStyle]}
      {...props}
    />
  );
}

const makeStyles = (insets: EdgeInsets) =>
  StyleSheet.create({
    flatList: {
      flex: 1,
      paddingTop: 16,
      paddingHorizontal: 16,
      paddingBottom: insets.bottom,
    },
    container: {
      gap: 16,
    },
  });

export default React.memo(ListLayout);
