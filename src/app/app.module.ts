// Angular 2 Modules
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RatingModule } from "ngx-rating";
import { Ng2Webstorage } from 'ngx-webstorage';
import { AgmCoreModule } from '@agm/core';
import { BrowserModule }  from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule, Validators }   from '@angular/forms';
// import { FormsModule, ReactiveFormsModule, Validators }   from '@angular/forms';

// Router
import { routing, appRoutingProviders } from './app.routing';

// Language 
import { Dictionary } from './dictionary/dictionary.service';
import { EnglishDictionary } from './dictionary/en.dictionary';
import { BulgarianDictionary } from './dictionary/bg.dictionary';

// Custom made goodies ( will be pushed to npm soon )
import { CarouselComponent } from './components/carousel/carousel.component';
import { ImageZoomDirective } from './directives/image_zoom/image_zoom.directive';

// Basic Components
import { ContactFormComponent } from './basic_components/contact-form/contact-form.component';
import { PriceComponent } from './basic_components/price/price.component';
import { ImageComponent } from './basic_components/image/image.component';
import { ButtonComponent } from './basic_components/button/button.component';
import { HeaderComponent } from './basic_components/header/header.component';
import { ProductComponent } from './basic_components/product/product.component';
import { NotificationComponent } from './basic_components/notification/notification.component';

// Components
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { DetailsComponent } from './components/details/details.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { BuySectionComponent } from './components/buy_section/buy_section.component';
import { ProductListComponent } from './components/product_list/product_list.component';
import { PageNotFoundComponent } from './components/page_not_found/page_not_found.component';
import { SuggestionListComponent } from './components/suggestion_list/suggestion_list.component';
import { ZoomableImagesComponent } from './components/zoomable_images/zoomable_images.component';

// Config
import { Config } from './config';

// Cache
import { Cache } from './cache/cache';
import { ProductAndCategories } from './cache/productAndCategories';

// Services
import { CartService } from './services/cart.service';
import { FetcherService } from './services/fetcher.service';
import { ProductsService } from './services/products.service';
import { CategoriesService } from './services/categories.service';
import { EventEmiterService } from './services/event.emiter.service';
import { ErrorHandlerService } from './services/error.handler.service';
// Material
// TODO: Remove unused components
import {
    MatAutocompleteModule,
    MatFormFieldModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatRadioModule
  } from '@angular/material';

@NgModule({
    // Modules & Libs
    imports: [
        routing,
        HttpModule,
        FormsModule,
        RatingModule,
        BrowserModule,
        Ng2Webstorage,
		MatFormFieldModule,
        ReactiveFormsModule,
        AgmCoreModule.forRoot({
          apiKey: 'AIzaSyDBbPzFEwNVTHNoZ-bz7YYqO1eMRPqTyUA'
        }),
        BrowserAnimationsModule,

        // Material
        MatAutocompleteModule,
		MatFormFieldModule,
        MatIconModule,
        MatToolbarModule,
        MatMenuModule,
        MatRadioModule
    ],
    // Components & Views
    declarations: [ 
        // directives
        ImageZoomDirective,
        // standard components
        AppComponent,
        ContactFormComponent,
        ImageComponent,
        PriceComponent,
        ButtonComponent,
        HeaderComponent,
        ProductComponent,
        CarouselComponent,
        BuySectionComponent,
        NotificationComponent,
        ZoomableImagesComponent,
        // views
        HomeComponent,
        CartComponent,
        SearchComponent,
        DetailsComponent,
        ContactsComponent,
        ProductListComponent,
        PageNotFoundComponent,
        SuggestionListComponent
    ],
    // Bootstraping
    bootstrap: [ 
        AppComponent 
    ],
    // Services
    providers: [
        // config of the app
        Config,
        // router of the app
        appRoutingProviders,
        // languages
        Dictionary,
        EnglishDictionary,
        BulgarianDictionary,
        // cache
        Cache,
        ProductAndCategories,
        // services of the app
        CartService,
        FetcherService,
        CategoriesService,
        ProductsService,
        EventEmiterService,
        ErrorHandlerService
    ]
})

export class AppModule { }