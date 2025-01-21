import { useState, useEffect } from "react";
import { ProductList } from "../features/products/ProductList";
import { Product } from "../core/entities/Product";
import { PAGINATION_LIMIT } from "../constants/pagination";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [refetching, setRefetching] = useState<boolean>(false);

  const productList = new ProductList();

  const fetchProducts = async () => {
    try {
      const data = await productList.execute(PAGINATION_LIMIT, 0);
      setProducts(data);
    } catch (err) {
      console.log(err);
      setError("Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  const refetchProducts = async () => {
    setRefetching(true);
    await fetchProducts();
    setRefetching(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, loading, error, refetch: refetchProducts, refetching };
};
