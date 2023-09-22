import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { FormsModule } from '@angular/forms';
import { DeliveryOrderComponent } from './delivery-order/delivery-order.component';
import { DeliveryListComponent } from './delivery-list/delivery-list.component';
import { Routes, RouterModule } from '@angular/router';
import { DeliverySeguimientoComponent } from './delivery-seguimiento/delivery-seguimiento.component';
import { ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {path: '', component: DeliveryOrderComponent},
  {path: 'delivery-order', component: DeliveryOrderComponent},
  {path: 'delivery-list', component: DeliveryListComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    DeliveryOrderComponent,
    DeliveryListComponent,
    DeliverySeguimientoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
