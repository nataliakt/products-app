export class Category {
  public selected: boolean = false;

  constructor(
    public readonly slug: string,
    public readonly name: string,
  ) {}
}
