import { Price } from "../valueObject/Price";

export class Product {
  constructor(
    public id: string,
    public title: string,
    public price: Price,
    public description: string,
    public rating: number,
    public stock: number,
    public thumbnail: string,
    public category: string,
  ) {}
}
