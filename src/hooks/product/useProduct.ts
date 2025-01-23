import { Product } from "@/src/core/entities/Product";
import { IUseCase } from "@/src/features/IUseCase";
import { ProductById } from "@/src/features/products/ProductById";
import { getErrorMessage } from "@/src/utils/getErrorMessage";
import { useCallback, useEffect, useReducer } from "react";

type ProductState = {
  product?: Product;
  loading: boolean;
  error?: string;
};

const productByIdUseCase = new ProductById();

const initialState: ProductState = {
  product: undefined,
  loading: true,
  error: undefined,
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "START_FETCHING": {
      return { ...state, loading: true, error: undefined };
    }
    case "FETCH_SUCCESS": {
      return { ...state, product: action.product, loading: false };
    }
    case "FETCH_ERROR": {
      return { ...state, error: getErrorMessage(action.error), loading: false };
    }
  }
};

export function useProduct(
  id: string,
  productById: IUseCase<Product> = productByIdUseCase,
) {
  const [{ product, loading, error }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  const fetchProduct = useCallback(
    async (id: string) => {
      try {
        dispatch({ type: "START_FETCHING" });
        const product = await productById.execute(id);
        dispatch({ type: "FETCH_SUCCESS", product });
      } catch (error) {
        dispatch({ type: "FETCH_ERROR", error });
      }
    },
    [productById],
  );

  useEffect(() => {
    fetchProduct(id);
  }, [fetchProduct, id]);

  return {
    product,
    loading,
    error,
    fetchProduct: () => fetchProduct(id),
  };
}
