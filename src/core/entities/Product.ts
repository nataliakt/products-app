export class Product {
  constructor(
    public id: string,
    public title: string,
    public price: number,
    public description: string,
    public rating: number,
    public stock: number,
    public thumbnail: string,
  ) {}
}
