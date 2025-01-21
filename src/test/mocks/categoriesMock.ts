import { Category } from "@/src/core/entities/Category";
import { CategoryMapper } from "@/src/core/mappers/CategoryMapper";

export const categoriesObjectMock = [
  {
    slug: "beauty",
    name: "Beauty",
    url: "https://dummyjson.com/products/category/beauty",
  },
  {
    slug: "fragrances",
    name: "Fragrances",
    url: "https://dummyjson.com/products/category/fragrances",
  },
  {
    slug: "furniture",
    name: "Furniture",
    url: "https://dummyjson.com/products/category/furniture",
  },
];

export const categoriesMock: Category[] = categoriesObjectMock.map(
  CategoryMapper.toDomain,
);
