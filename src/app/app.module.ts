import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
import {RouterModule} from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import {AppRoutingModule} from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    AddProductComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
