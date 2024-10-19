"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleDataSource = void 0;
var Product_1 = require("./Product");
var SimpleDataSource = /** @class */ (function () {
    function SimpleDataSource() {
        this.products = new Array(new Product_1.Product(1, "Samsung S10", "Phone", 500), new Product_1.Product(2, "Samsung S11", "Phone", 600), new Product_1.Product(3, "Samsung S12", "Phone", 700), new Product_1.Product(4, "Samsung S13", "Phone", 800));
    }
    SimpleDataSource.prototype.getProducts = function () {
        return this.products;
    };
    return SimpleDataSource;
}());
exports.SimpleDataSource = SimpleDataSource;
