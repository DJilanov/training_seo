// Angular 2 Modules
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MetaModule } from 'ng2-meta';
import { Ng2Webstorage } from 'ng2-webstorage';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { BrowserModule }  from '@angular/platform-browser';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { RecaptchaModule, RecaptchaLoaderService } from 'ng2-recaptcha';
import { FormsModule, ReactiveFormsModule, Validators }   from '@angular/forms';

// Router
import { routing, appRoutingProviders } from './app.routing';

// Language 
import { Dictionary } from './dictionary/dictionary.service';
import { EnglishDictionary } from './dictionary/en.dictionary';
import { BulgarianDictionary } from './dictionary/bg.dictionary';

// Basic Components
import { FormComponent } from './basic_components/form/form.component';
import { PriceComponent } from './basic_components/price/price.component';
import { ImageComponent } from './basic_components/image/image.component';
import { ButtonComponent } from './basic_components/button/button.component';
import { HeaderComponent } from './basic_components/header/header.component';
import { ProductComponent } from './basic_components/product/product.component';
import { CarouselComponent } from './basic_components/carousel/carousel.component';
import { NotificationComponent } from './basic_components/notification/notification.component';

// Components
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { DetailsComponent } from './components/details/details.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { SideMenuComponent } from './components/side_menu/side_menu.component';
import { BuySectionComponent } from './components/buy_section/buy_section.component';
import { ProductListComponent } from './components/product_list/product_list.component';
import { PageNotFoundComponent } from './components/page_not_found/page_not_found.component';
import { SuggestionListComponent } from './components/suggestion_list/suggestion_list.component';
import { ZoomableImagesComponent } from './components/zoomable_images/zoomable_images.component';

// Admin
import { Ng2DragDropModule } from "ng2-drag-drop";

import { AdminComponent } from './admin/components/admin/admin.component';
import { AdminHomeComponent } from './admin/components/admin-home/admin_home.component';
import { AdminMessagesComponent } from './admin/components/admin-messages/admin_messages.component';
import { AdminProductsComponent } from './admin/components/admin-products/admin_products.component';
import { AdminCategoriesComponent } from './admin/components/admin-categories/admin_categories.component';
import { AdminNavigationComponent } from './admin/components/admin-navigation/admin_navigation.component';
import { AdminProductModalComponent } from './admin/components/admin-product-modal/admin_product_modal.component';

import { AuthService } from './admin/services/auth.service';

// Config
import { Config } from './config';

// Services
import { CartService } from './services/cart.service';
import { FetcherService } from './services/fetcher.service';
import { ProductsService } from './services/products.service';
import { CategoriesService } from './services/categories.service';
import { EventEmiterService } from './services/event.emiter.service';
import { ErrorHandlerService } from './services/error.handler.service';

@NgModule({
    // Modules & Libs
    imports: [
        routing,
        HttpModule,
        FormsModule,
        BrowserModule,
        Ng2Webstorage,
        RecaptchaModule,
        Ng2BootstrapModule,
        ReactiveFormsModule,
        MetaModule.forRoot(),
        AgmCoreModule.forRoot({
          apiKey: 'AIzaSyDBbPzFEwNVTHNoZ-bz7YYqO1eMRPqTyUA'
        }),
        // admin
        Ng2DragDropModule
    ],
    // Components & Views
    declarations: [ 
        // standard components
        AppComponent,
        FormComponent,
        ImageComponent,
        PriceComponent,
        ButtonComponent,
        HeaderComponent,
        ProductComponent,
        CarouselComponent,
        BuySectionComponent,
        NotificationComponent,
        ZoomableImagesComponent,
        // SideMenuComponent,
        // views
        HomeComponent,
        CartComponent,
        SearchComponent,
        DetailsComponent,
        ContactsComponent,
        ProductListComponent,
        PageNotFoundComponent,
        SuggestionListComponent,
        // admin
        AdminComponent,
        AdminHomeComponent,
        AdminMessagesComponent,
        AdminProductsComponent,
        AdminCategoriesComponent,
        AdminNavigationComponent,
        AdminProductModalComponent,
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
        RecaptchaLoaderService,
        // languages
        Dictionary,
        EnglishDictionary,
        BulgarianDictionary,
        // services of the app
        CartService,
        FetcherService,
        CategoriesService,
        ProductsService,
        EventEmiterService,
        ErrorHandlerService,

        // admin
        AuthService
    ]
})

export class AppModule { }