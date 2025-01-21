import { Category } from "../entities/Category";

export class CategoryMapper {
  public static readonly fields = ["name", "slug"];

  static toDomain(raw: any): Category {
    return new Category(raw.slug, raw.name);
  }
}
