import { Product } from "../entities/Product";
import { Price } from "../valueObject/Price";

export class ProductMapper {
  public static readonly fields = [
    "id",
    "title",
    "price",
    "description",
    "rating",
    "stock",
    "thumbnail",
    "category",
  ];

  static toDomain(raw: any): Product {
    return new Product(
      raw.id,
      raw.title,
      new Price(raw.price),
      raw.description,
      raw.rating,
      raw.stock,
      raw.thumbnail,
      raw.category,
    );
  }
}
