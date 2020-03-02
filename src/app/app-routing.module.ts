import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShopComponent} from './shop/shop.component';
import {AddProductComponent} from './add-product/add-product.component';

const appRoutes: Routes = [
  {path: '', component: ShopComponent},
  {path: 'add-product', component: AddProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
