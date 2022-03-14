import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserProfileComponent } from './components/user-profile.component';
import { DesignSystemModule } from '../design-system/design-system.module';

@NgModule({
  declarations: [UserProfileComponent],
  imports: [CommonModule, FormsModule, DesignSystemModule],
  exports: [UserProfileComponent],
})
export class UserProfileModule {}
