import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReCaptchaModule } from 'angular2-recaptcha';

import { SharedModule } from '../../shared/shared.module';
import { OrderContactComponent } from './panels/order-contact/order-contact.component';
import { OrderCompleteComponent } from './panels/order-complete/order-complete.component';
import { OrderDeliveryComponent } from './panels/order-delivery/order-delivery.component';
import { OrderProcessingComponent } from './panels/order-processing/order-processing.component';

import { OrderComponent } from './order.component';

const routes: Routes = [
    { path: '**', component: OrderComponent, pathMatch: 'full' },
];

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes),
		ReCaptchaModule
    ],
    exports: [],
    declarations: [
        OrderComponent,
        OrderContactComponent,
        OrderCompleteComponent,
        OrderDeliveryComponent,
        OrderProcessingComponent
    ]
})
export class OrderModule { }
