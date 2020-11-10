import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';
import { SharedModule } from '@shared';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [CommonModule, TranslateModule, SharedModule, CheckoutRoutingModule, FormsModule],
  declarations: [CheckoutComponent],
})
export class CheckoutModule {}
