import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import {
  Combo,
  KkKusurKtlgGorsel,
  KkKusurKtlgHat,
  KkKusurKtlgYatkinKaliteler,
  KusurKatalogView,
} from '@euys/api-interfaces';
import { ConfirmationService } from 'primeng/api';
import { TabView } from 'primeng/tabview';
import { GorselRemoveEvent } from '../../interfaces/gorsel-remove-event';
import { GorselUploadEvent } from '../../interfaces/gorsel-upload-event';

interface TabCloseEvent {
  originalEvent: MouseEvent;
  index: number;
  close?: () => void;
}

interface TabChangeEvent {
  originalEvent: MouseEvent;
  index: number;
}

@Component({
  selector: 'euys-kusur-kodu-katalog',
  templateUrl: './kusur-kodu-katalog.component.html',
  styleUrls: ['./kusur-kodu-katalog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ConfirmationService],
})
export class KusurKoduKatalogComponent implements OnInit, OnChanges {
  @Input()
  kusurKodu!: string;
  @Input()
  kusurKatalogViewList: KusurKatalogView[];
  @Input()
  listLoaded: boolean;
  @Input()
  newKatalog?: KusurKatalogView;
  @Input()
  hatComboList: string[];
  @Input()
  hatComboListLoaded: boolean;
  @Input()
  kaliteList?: KkKusurKtlgYatkinKaliteler[];
  @Input()
  kaliteListLoaded = false;
  @Input()
  urunListLoaded = false;
  @Input()
  urunList: Combo[] = [];
  @Input()
  gorselList: KkKusurKtlgGorsel[] = [];
  @Input()
  gorselListLoaded = false;

  @Output()
  add: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  remove: EventEmitter<{ katalog: KusurKatalogView; index: number }> =
    new EventEmitter<{ katalog: KusurKatalogView; index: number }>();

  @Output()
  resetGorselList = new EventEmitter<void>();

  @Output()
  loadGorselList = new EventEmitter<KkKusurKtlgHat>();

  @Output()
  addGorsel = new EventEmitter<GorselUploadEvent>();

  @Output()
  removeGorsel = new EventEmitter<GorselRemoveEvent>();

  @Output()
  saveOrUpdate: EventEmitter<KusurKatalogView> = new EventEmitter<KusurKatalogView>();

  @ViewChild('tabView', { static: true })
  tabView: TabView;

  index = 0;
  dirtyForms: Record<string, boolean> = {};

  trackBykusurKatalogId(index: number, katalog: KusurKatalogView): string {
    return katalog.kkKusurKtlgHat.id;
  }

  constructor(private readonly confirmationService: ConfirmationService) {
    console.log('construct');
  }
  ngOnChanges(changes: SimpleChanges): void {
    if ('kusurKodu' in changes) {
      this.index = 0;
      this.dirtyForms = {};
    }
    if ('kusurKatalogViewList' in changes) {
      const { currentValue, previousValue } = changes.kusurKatalogViewList;
      if (!currentValue?.length && !this.newKatalog) {
        this.addNewKatalog();
      } else if (this.newKatalog) this.removeUnsaved();
      if (this.index < currentValue?.length) {
        const view = currentValue[this.index];
        this.loadGorselList.emit(view.kkKusurKtlgHat);
      }
      if (currentValue?.length > (previousValue?.length || 0)) {
        setTimeout(() => {
          this.index = 0;
        }, 500);
      }
    }
  }

  ngOnInit(): void {
    console.log('init');

    /* if(!this.kusurKatalogViewList?.length) {
      this.addNewKatalog();
    } */
  }

  handleClose(event: TabCloseEvent): void {
    const tabData = this.kusurKatalogViewList[event.index] || this.newKatalog;
    const message =
      tabData === this.newKatalog
        ? 'Henüz kaydedilmemiş katalog bilgisini silmek istediğinizden emin misiniz?'
        : `${tabData.kkKusurKtlgHat.hatKodu} hattına ait bu katalog bilgisini silmek istediğinizden emin misiniz?`;
    this.confirmationService.confirm({
      accept: () => {
        if (!tabData.kkKusurKtlgHat.id) {
          this.removeUnsaved();
        } else {
          this.remove.emit({ katalog: tabData, index: event.index });
        }
        this.tabView.open(null, this.tabView.tabs[0]);
      },
      message,
      target: event.originalEvent.target,
    });
  }

  handleTabChange(event: TabChangeEvent): void {
    this.resetGorselList.emit();
    const { index } = event;
    if (index >= this.kusurKatalogViewList.length) {
      this.addNewKatalog();
    } else {
      const kkKusurKatalog = this.kusurKatalogViewList[index];
      const { hatKodu } = kkKusurKatalog.kkKusurKtlgHat;
      for (const key in this.dirtyForms) {
        if (key.endsWith(hatKodu)) {
          // TODO: Kaydedilmemiş tab, onay isteya da hata göster
        }
      }
      this.loadGorselList.emit(kkKusurKatalog.kkKusurKtlgHat);
    }
  }

  addNewKatalog() {
    this.add.emit(this.kusurKodu);
  }

  removeUnsaved() {
    this.remove.emit({ katalog: this.newKatalog, index: null });
    this.index = 0;
  }

  onSubmitKatalog(katalog: KusurKatalogView) {
    this.saveOrUpdate.emit(katalog);
  }

  onAddGorsel(event: GorselUploadEvent) {
    this.addGorsel.emit(event);
  }

  onRemoveGorsel(event: GorselRemoveEvent) {
    this.removeGorsel.emit(event);
  }
}
