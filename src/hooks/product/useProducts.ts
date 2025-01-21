import { useState, useEffect, useCallback } from "react";
import { ProductList } from "../../features/products/ProductList";
import { Product } from "../../core/entities/Product";
import { PAGINATION_LIMIT } from "../../constants/pagination";
import { IUseCase } from "@/src/features/IUseCase";

const productListUseCase = new ProductList();

export const useProducts = (
  productList: IUseCase<Product[]> = productListUseCase,
) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [refetching, setRefetching] = useState<boolean>(false);

  const fetchProducts = useCallback(async () => {
    try {
      const data = await productList.execute(PAGINATION_LIMIT, 0);
      setProducts(data);
    } catch (err) {
      console.log(err);
      setError("Failed to load products");
    } finally {
      setLoading(false);
    }
  }, [productList]);

  const refetchProducts = async () => {
    setRefetching(true);
    await fetchProducts();
    setRefetching(false);
  };

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return { products, loading, error, refetch: refetchProducts, refetching };
};
