import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ProdukRoutingModule } from './produk-routing.module';
import { ProdukComponent } from './produk.component';
import { SharedModule } from '@shared';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, TranslateModule, SharedModule, ProdukRoutingModule, FormsModule],
  declarations: [ProdukComponent],
})
export class ProdukModule {}
