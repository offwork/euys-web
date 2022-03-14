import {
  Directive,
  HostListener,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { ConfirmClickComponent } from './confirm-click.component';

@Directive({
  selector: '[euysConfirmMessage]',
  providers: [DialogService],
})
export class ConfirmClickDirective {
  @Input()
  euysConfirmMessage = 'İşleme devam etmek istediğinizden emin misiniz?';
  @Input()
  euysConfirmHeader = 'Onayla';
  @Input()
  euysConfirmIcon = 'pi pi-exclamation-triangle';
  @Input()
  // TODO: `?` gereksiz kullanılıyor `!` ve `?`
  // sembollerinin kullanımı birbirlerinden tamammen farklıdır!
  host?: any;

  @Output()
  confirm: EventEmitter<Event> = new EventEmitter<Event>();
  @Output()
  reject: EventEmitter<void> = new EventEmitter<void>();

  constructor(private dialogService: DialogService) {}

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    event.preventDefault();
    event.stopImmediatePropagation();
    const dialogRef = this.dialogService.open(ConfirmClickComponent, {
      data: {
        message: this.euysConfirmMessage,
        icon: this.euysConfirmIcon,
      },
      header: this.euysConfirmHeader,
      styleClass: 'p-confirm-dialog',
      contentStyle: { padding: '0 !important' },
      modal: true,
      closable: false,
      closeOnEscape: false,
      showHeader: true,
      width: '40vw',
    });
    dialogRef.onClose.subscribe(result => {
      if (result) {
        this.confirm.emit(event);
      } else this.reject.emit();
    });
  }
}
