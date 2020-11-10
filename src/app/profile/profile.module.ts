import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';

@NgModule({
  imports: [CommonModule, TranslateModule, ProfileRoutingModule, FormsModule],
  declarations: [ProfileComponent],
})
export class ProfileModule {}
