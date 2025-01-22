import { BaseError } from "@/src/core/errors/BaseError";

type APIRequestErrorName =
  | "FETCH_CATEGORIES_ERROR"
  | "FETCH_PRODUCTS_ERROR"
  | "FETCH_PRODUCT_ERROR";

export class APIRequestError extends BaseError<APIRequestErrorName> {}
