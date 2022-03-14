import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { EvetHayir, HSMBobinModel } from '@euys/api-interfaces';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'euys-qc-list',
  templateUrl: './qc-list.component.html',
  styleUrls: ['./qc-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [MessageService],
})
export class QcListComponent {
  @Input() hsmBobinList$: Observable<HSMBobinModel[]>;
  @Input() hsmBobinListLoaded$: Observable<boolean>;
  @Output() goToPage: EventEmitter<number> = new EventEmitter<number>();
  @Output() preserveSecondStepState: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  @Output() refreshBobinList$: EventEmitter<undefined> =
    new EventEmitter<undefined>();
  @Output() selectionChangeEventEmitter$: EventEmitter<HSMBobinModel[]> =
    new EventEmitter<HSMBobinModel[]>();

  devamButtonDisabled = true;
  items: MenuItem[];
  selectedBobinList: HSMBobinModel[] = [];
  toggleable = false;
  topluKayitButtonDisabled = true;

  constructor(private messageService: MessageService) {
    this.items = [
      {
        label: 'Seçenekler',
        items: [
          {
            label: 'Yenile',
            icon: 'pi pi-refresh',
            command: () => {
              this.update();
            },
          },
        ],
      },
    ];
  }

  get bobin(): HSMBobinModel | null {
    if (this.selectedBobinList?.length === 1) {
      return this.selectedBobinList[0];
    } else {
      return null;
    }
  }

  update() {
    this.refreshBobinList$.emit(undefined);
    this.messageService.add({
      key: 'tr',
      severity: 'success',
      summary: 'Yenileme işlemi başarılı.',
      detail: '1. Sıcak Haddehane QC Kayıt listesi başarı ile yenilendi.',
      sticky: false,
    });
  }

  onSelectionChangeEventHandler($event: HSMBobinModel[]): void {
    this.selectedBobinList = [...$event];
    this.selectionChangeEventEmitter$.emit($event);
  }

  goToSecondPage() {
    this.preserveSecondStepState.emit(false);
    this.goToPage.emit(1);
  }

  topluKayit(): void {
    const topluKayit = this.selectedBobinList?.length > 1;
    const disableTopluKayit = this.selectedBobinList.some(
      bobin => bobin.topluKayit === EvetHayir.HAYIR
    );
    if (topluKayit && disableTopluKayit) {
      this.messageService.add({
        key: 'tr',
        severity: 'warn',
        summary: 'Toplu kayıt yapılamaz.',
        detail: 'Seçtiğiniz kayıtlar toplu kayıt için uygun değildir.',
        sticky: false,
      });
      return;
    }
    if (!this.selectedBobinList?.length) {
      console.error('Seçim yapılmalı!');
      return;
    }
    if (topluKayit) {
      // TODO: dispatch toplu kayıt action
    }
  }
}
