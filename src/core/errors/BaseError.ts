export abstract class BaseError<T extends string> extends Error {
  constructor(
    public readonly name: T,
    public readonly message: string,
    public readonly cause?: any,
  ) {
    super();
  }
}
