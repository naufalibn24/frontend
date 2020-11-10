import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LoaderComponent, ButtonComponent],
  exports: [LoaderComponent, ButtonComponent],
})
export class SharedModule {}
