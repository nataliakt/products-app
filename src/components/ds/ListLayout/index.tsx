import { FlatList, FlatListProps, StyleSheet } from "react-native";
import { EdgeInsets, useSafeAreaInsets } from "react-native-safe-area-context";

type SafeAreaLayoutProps<ItemT> = FlatListProps<ItemT> & {
  gap?: number;
};

export default function ListLayout<ItemT>({
  gap,
  style,
  contentContainerStyle,
  ...props
}: SafeAreaLayoutProps<ItemT>) {
  const insets = useSafeAreaInsets();
  const styles = makeStyles(insets);

  return (
    <FlatList
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
      paddingVertical: 24,
      paddingHorizontal: 16,
    },
    container: {
      gap: 16,
      paddingBottom: insets.bottom,
    },
  });
