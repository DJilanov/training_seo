import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Dictionary } from '../../dictionary/dictionary.service';
import { CategoriesService } from '../../services/categories.service';
import { ProductsService } from '../../services/products.service';
import { EventEmiterService } from '../../services/event.emiter.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'custom-details',
    styleUrls: ['./details.component.css'],
    templateUrl: './details.component.html'
})

export class DetailsComponent implements OnInit {

    public product;

    public productLink: String;

    public imagesArray: Array<Object>;

    public productPrice: Object;

    public productOldPrice: Object;

    public starsCount: number = Math.random() * (5 - 3.8) + 3.8;
    public voters: number = Math.floor(Math.random() * (50 - 10) + 10);

    constructor(
        public router: Router,
        public dictionary: Dictionary,
        public metaService: Meta,
        public routeParams: ActivatedRoute,
        public productsService: ProductsService,
        public eventEmiterService: EventEmiterService
    ) {
        this.routeParams.params.subscribe(params => this.setParams(params));
        // TODO: REFACTOR IT!!!! ITS FIRING 7 TIMES FFS
        this.router.events.subscribe(data => this.changeTitle(data));
    };

    public setParams(params) {
        if(params['productLink']) {
            this.product = this.productsService.getProductByLink(params['productLink']);
            if(this.product == undefined) {
                this.product = {};
                this.productLink = params['productLink'];
                this.eventEmiterService.dataFetched.subscribe(data => this.onProductsUpdate(data.products));
                return;
            }
            this.productPrice = {
                class: '',
                price: this.product['new_price'],
                currency: this.dictionary.getTexts('currency'),
            };
            this.productOldPrice = {
                class: 'line-through',
                price: this.product['old_price']
            };
            this.imagesArray = [this.product['main_image']].concat(this.product['other_images']);
        }
    }

    public onProductsUpdate(products) {
        if(this.productLink !== undefined) {
            this.product = this.productsService.getProductByLink(this.productLink);
            this.productPrice = {
                class: '',
                price: this.product['new_price'],
                currency: this.dictionary.getTexts('currency'),
            };
            this.productOldPrice = {
                class: 'line-through',
                price: this.product['old_price']
            };
            this.imagesArray = [this.product['main_image']].concat(this.product['other_images']);
        }
    }

    public changeTitle(data) {
        if(this.router.url.indexOf('/details') !== -1) {
            if(this.product['title']) {
                this.metaService.updateTag({
                    "content": this.product['title'].bg
                },
                    "property= 'title'"
                );
                this.metaService.updateTag({
                    "content": this.product['main_image']
                },
                    "property= 'og:image'"
                );
            } else {
                this.metaService.updateTag({
                    "content": 'Всичко за вашия компютър на най-конкурентни цени в Жиланов ЕООД!'
                },
                    "property= 'title'"
                );
                this.metaService.updateTag({
                    "content": './src/img/navigation-logo.png'
                },
                    "property= 'og:image'"
                );
            }
        }
    }

    ngOnInit() {
        this.metaService.updateTag({
            "content": 'Всичко за вашия компютър на най-конкурентни цени в Жиланов ЕООД!'
        },
            "property= 'title'"
        );
        this.metaService.updateTag({
            "content": './src/img/navigation-logo.png'
        },
            "property= 'og:image'"
        );
    }
}
