import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [CommonModule, TranslateModule, RegisterRoutingModule, FormsModule],
  declarations: [RegisterComponent],
})
export class RegisterModule {}
