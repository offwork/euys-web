import { Component, Inject, Optional } from '@angular/core';
import { HotToastRef } from '@ngneat/hot-toast';
import { ErrorMessage } from '../models/error-message.model';

@Component({
  selector: 'euys-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
})
export class ErrorMessageComponent {
  constructor(@Optional() @Inject(HotToastRef) public toastRef: HotToastRef<ErrorMessage>) {}
}
