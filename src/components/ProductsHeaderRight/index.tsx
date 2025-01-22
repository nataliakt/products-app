import React from "react";
import { Button } from "../ds";
import { router } from "expo-router";

function ProductHeaderRight() {
  const onPress = () => {
    router.push("/categories/modal");
  };

  return <Button title="Filter" onPress={onPress} size="small" icon="filter" />;
}

export default React.memo(ProductHeaderRight);
