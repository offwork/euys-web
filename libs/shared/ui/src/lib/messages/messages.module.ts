import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HotToastModule } from '@ngneat/hot-toast';
import { DesignSystemModule } from '../design-system/design-system.module';
import { MessageRowComponent } from './components/message-row.component';
import { MessageComponent } from './components/message.component';
import { ValidationMessageDirective } from './directives/validation-message.directive';
import { ToastMessageService } from './services/toast-message.service';

export { ToastMessageService } from './services/toast-message.service';

@NgModule({
  declarations: [
    MessageComponent,
    ValidationMessageDirective,
    MessageRowComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DesignSystemModule,
    HotToastModule,
  ],
  exports: [MessageComponent, MessageRowComponent, ValidationMessageDirective],
  providers: [ToastMessageService],
})
export class MessagesModule {}
