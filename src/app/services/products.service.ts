import { Injectable, EventEmitter } from '@angular/core';

import { Config } from '../config';

@Injectable()

/**
 * @DriverService used on all connections to the back-end for the drivers
 */
export class ProductsService {

    public productsUpdate: EventEmitter<any>;

    private products = Array<Object>();
    /**
    * @getProducts get all products
    * @return {Array} all drivers
    */
    public getProducts() {
        return this.products;
    }

    public setProducts(products) {
        this.products = products;
        this.productsUpdate.emit(products);
    }

    public getProductById(id) {
        for(var productsCounter = 0; productsCounter < this.products.length; productsCounter++) {
            if(this.products[productsCounter]['_id'] == id) {
                return this.products[productsCounter];
            }
        }
    }

    public getProductsByCategory(category_id) {
        var productsByCategory = [];
        for(var productsCounter = 0; productsCounter < this.products.length; productsCounter++) {
            if(this.products[productsCounter]['category'] == category_id) {
                productsByCategory.push(this.products[productsCounter]);
            }
        }
        return productsByCategory;
    }

    constructor() {
        this.productsUpdate = new EventEmitter();
    }
}
