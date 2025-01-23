import { Product } from "@/src/core/entities/Product";
import { IUseCase } from "@/src/features/IUseCase";
import { ProductById } from "@/src/features/products/ProductById";
import { useCallback, useEffect, useState } from "react";

const productByIdUseCase = new ProductById();

export function useProduct(
  id: string,
  productById: IUseCase<Product> = productByIdUseCase,
) {
  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState(true);

  const loadProduct = useCallback(
    async (id: string) => {
      const product = await productById.execute(id);
      setProduct(product);
      setLoading(false);
    },
    [productById],
  );

  useEffect(() => {
    loadProduct(id);
  }, [loadProduct, id]);

  return {
    product,
    loading,
  };
}
