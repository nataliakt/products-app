import { BaseError } from "../core/errors/BaseError";

export function getErrorMessage(error: any): string {
  if (error instanceof BaseError) {
    return error.message;
  }
  return "There was an unexpected error, please try again later.";
}
