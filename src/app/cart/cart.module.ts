import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
// import { NgxPaginationModule } from 'ngx-pagination/dist/ngx-pagination.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [CommonModule, TranslateModule, CartRoutingModule, FormsModule],
  declarations: [CartComponent],
})
export class CartModule {}
