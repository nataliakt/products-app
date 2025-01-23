import React from "react";
import { Button } from "../ds";
import { StyleSheet, View } from "react-native";
import { ButtonIcon } from "../ds/Button";

type ProductHeaderRightProps = {
  sortBy: string;
  sortIcon?: ButtonIcon;
  onPressSort: VoidFunction;
  onPressFilter: VoidFunction;
};

function ProductHeaderRight({
  sortBy,
  sortIcon,
  onPressSort,
  onPressFilter,
}: ProductHeaderRightProps) {
  return (
    <View style={styles.container}>
      <Button
        title="Filter"
        onPress={onPressFilter}
        size="small"
        icon="filter"
      />
      <Button
        title={sortBy}
        onPress={onPressSort}
        size="small"
        icon={sortIcon}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 8,
  },
});

export default React.memo(ProductHeaderRight);
