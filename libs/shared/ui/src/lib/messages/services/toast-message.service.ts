import { Injectable } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';

@Injectable()
export class ToastMessageService {
  static readonly FORM_VALIDATION = 'Gerekli form alanları doldurunuz';

  constructor(private toast: HotToastService) {}

  warning(message: string) {
    this.toast.warning(message, {
      position: 'top-right',
      autoClose: false,
      dismissible: true,
    });
  }

  warningValidation() {
    this.warning(ToastMessageService.FORM_VALIDATION);
  }
}
