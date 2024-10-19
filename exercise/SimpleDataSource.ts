import { Product } from "./Product";


export class SimpleDataSource {
    private products: Array<Product>;

    constructor( ) {
        this.products = new Array<Product>(
            new Product(1, "Samsung S10", "Phone", 500),
            new Product(2, "Samsung S11", "Phone", 600),
            new Product(3, "Samsung S12", "Phone", 700),
            new Product(4, "Samsung S13", "Phone", 800),
        )
    }

    getProducts(): Product[] {
        return this.products;
    }
}

