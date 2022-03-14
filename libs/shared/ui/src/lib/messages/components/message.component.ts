import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'euys-message',
  templateUrl: './message.component.html',
})
export class MessageComponent {
  @HostBinding('class.w-full') widthFull = true;
  @Input() message = 'Kayıt bulunamadı.';
  @Input() size: 'small' | 'normal' = 'normal';
}
