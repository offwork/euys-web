import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import {
  Combo,
  IslemTipi,
  KkKusurKtlgGorsel,
  KkKusurKtlgHat,
  KkKusurKtlgKokNeden,
  KkKusurKtlgMuhOprYorum,
  KkKusurKtlgOnlem,
  KkKusurKtlgSiddetTanim,
  KkKusurKtlgYatkinKaliteler,
  KkKusurKtlgYogunlukTanim,
  KusurKatalogView,
  KusurSiddeti,
  KusurYogunlugu,
} from '@euys/api-interfaces';
import { FormArray, FormControl, FormGroup } from '@ngneat/reactive-forms';
import { Observable, Subject } from 'rxjs';
import {
  distinctUntilChanged,
  map,
  takeUntil,
  take,
  skip,
  filter,
  tap,
} from 'rxjs/operators';
import { ConfirmationService } from 'primeng/api';
import { Validators } from '@angular/forms';
import { FileUpload } from 'primeng/fileupload';
import { KaliteKontrolGorselService } from '../../../services/kalite-kontrol-gorsel.service';
import { Kk8101Facade } from '../../../../kk-8101/+state/kk-8101.facade';
import DUMMY_DATA from '../../interfaces/dummy-data';

@Component({
  selector: 'euys-kusur-katalog-form',
  templateUrl: './kusur-katalog-form.component.html',
  styleUrls: ['./kusur-katalog-form.component.scss'],
  providers: [ConfirmationService],
})
export class KusurKatalogFormComponent implements OnInit, OnChanges, OnDestroy {
  @Input()
  kusurKatalog!: KusurKatalogView;
  @Input()
  hatList: string[] = [];
  kaliteList$: Observable<KkKusurKtlgYatkinKaliteler[]>;
  urunList$: Observable<Combo[]>;
  urunListLoaded$: Observable<boolean>;
  gorselList$: Observable<KkKusurKtlgGorsel[]>;
  gorselListLoaded$: Observable<boolean>;
  // TODO: Mock Data for use as thumbnails
  images = DUMMY_DATA.images;
  originalSource$: Observable<string>;

  @Output()
  isDirty: EventEmitter<boolean> = new EventEmitter<boolean>();

  @ViewChild('uploader')
  gorselUploader: FileUpload;

  form: FormGroup<KusurKatalogView>;
  destroy$ = new Subject<void>();
  kusurSiddeti = KusurSiddeti;
  kusurYogunlugu = KusurYogunlugu;
  kusurSiddetleri = [KusurSiddeti.HAFIF, KusurSiddeti.ORTA, KusurSiddeti.AGIR];
  kusurYogunluklari = [
    KusurYogunlugu.SEYREK,
    KusurYogunlugu.SIK,
    KusurYogunlugu.SUREKLI,
  ];

  kaliteCompareFn = (
    k1: KkKusurKtlgYatkinKaliteler,
    k2: KkKusurKtlgYatkinKaliteler
  ): boolean => {
    return k1.celikKalitesi === k2.celikKalitesi;
  };

  kokNedenMappingFn: (value: string, index: number) => KkKusurKtlgKokNeden = (
    value,
    index
  ) => ({
    kokNedenNo: index + 1,
    kokNedenAciklama: value,
    id: null,
    idKusurHat: null,
  });
  prosesOnlemMappingFn: (value: string, index: number) => KkKusurKtlgOnlem = (
    value,
    index
  ) => ({
    onlemNo: index + 1,
    onlemAciklama: value,
    id: null,
    idKusurHat: null,
  });

  kaliteTrackBy: (value: KkKusurKtlgYatkinKaliteler) => string = ({
    celikKalitesi,
  }) => celikKalitesi;

  constructor(
    private confirmationService: ConfirmationService,
    private gorselService: KaliteKontrolGorselService,
    private facade: Kk8101Facade
  ) {
    this.form = new FormGroup<KusurKatalogView>({
      kkKusurKtlgHat: new FormGroup<KkKusurKtlgHat>({
        hatKodu: new FormControl<string>(
          {
            value: null,
            disabled: !!this.kusurKatalog?.kkKusurKtlgHat?.id,
          },
          Validators.required
        ),
        id: new FormControl<string>(null),
        kusurKodu: new FormControl<string>(null),
        etag: new FormControl<string>(null),
        islemTipiNo: new FormControl<IslemTipi>(IslemTipi.KAYIT),
        islemYapanKisi: new FormControl<string>(null),
        islemYapanMenu: new FormControl<string>(null),
        olusturanKisi: new FormControl<string>(null),
      }),
      kkKusurKtlgKokNedenList: new FormControl<KkKusurKtlgKokNeden[]>([]),
      kkKusurKtlgMuhOprYorumList: new FormControl<KkKusurKtlgMuhOprYorum[]>([]),
      kkKusurKtlgOnlemlerList: new FormControl<KkKusurKtlgOnlem[]>([]),
      kkKusurKtlgSiddetTanimList: new FormArray<KkKusurKtlgSiddetTanim>(
        this.kusurSiddetleri.map(kusurSiddeti => {
          return new FormGroup<KkKusurKtlgSiddetTanim>({
            id: new FormControl<string>(null),
            idKusurHat: new FormControl<string>(null),
            kusurSiddetNo: new FormControl<KusurSiddeti>(kusurSiddeti),
            kusurSiddetTanim: new FormControl<string>(null),
            etag: new FormControl<string>(null),
            islemTipiNo: new FormControl<IslemTipi>(IslemTipi.KAYIT),
            islemYapanKisi: new FormControl<string>(null),
            islemYapanMenu: new FormControl<string>(null),
            olusturanKisi: new FormControl<string>(null),
          });
        })
      ),
      kkKusurKtlgYatkinKalitelerList: new FormControl<
        KkKusurKtlgYatkinKaliteler[]
      >([]),
      kkKusurKtlgYogunlukTanimList: new FormArray<KkKusurKtlgYogunlukTanim>(
        this.kusurYogunluklari.map(kusurYogunlugu => {
          return new FormGroup<KkKusurKtlgYogunlukTanim>({
            id: new FormControl<string>(null),
            idKusurHat: new FormControl<string>(null),
            kusurYogunlukNo: new FormControl<KusurYogunlugu>(kusurYogunlugu),
            kusurYogunlukTanim: new FormControl<string>(null),
            etag: new FormControl<string>(null),
            islemTipiNo: new FormControl<IslemTipi>(IslemTipi.KAYIT),
            islemYapanKisi: new FormControl<string>(null),
            islemYapanMenu: new FormControl<string>(null),
            olusturanKisi: new FormControl<string>(null),
          });
        })
      ),
    });
    this.gorselList$ = this.facade.katalogGorselList$;
    this.gorselListLoaded$ = this.facade.katalogGorselListLoaded$;
    this.kaliteList$ = this.facade.kaliteler$.pipe(
      map(kaliteler =>
        kaliteler.map(({ kodu }) => ({
          id: null,
          idKusurHat: null,
          celikKalitesi: kodu,
        }))
      )
    );
    this.urunListLoaded$ = this.facade.ktUrunListLoaded$;
    this.urunList$ = this.facade.ktUrunList$;
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.gorselList && !changes.gorselList.firstChange) {
      const uploadSuccess =
        changes.gorselList.currentValue?.length >
        changes.gorselList.previousValue?.length;
      if (!uploadSuccess) return;

      this.gorselUploader.clear();
    }

    if (changes.kusurKatalog) {
      this.form.reset(changes.kusurKatalog.currentValue);
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  ngOnInit(): void {
    const islemTipi = this.kusurKatalog.kkKusurKtlgHat.id
      ? IslemTipi.GUNCELLEME
      : IslemTipi.KAYIT;
    // this.form.setValue(this.kusurKatalog);

    // Form dirty ise tab paneli bilgilendirelim
    this.form.dirty$.pipe(takeUntil(this.destroy$)).subscribe(isDirty => {
      this.isDirty.emit(isDirty);
    });

    if (this.kusurKatalog?.kkKusurKtlgHat?.id) {
      this.hatList = this.hatList.concat(
        this.kusurKatalog.kkKusurKtlgHat.hatKodu
      );
    }

    const persists$ = (
      this.form.controls.kkKusurKtlgHat.get('id') as FormControl<string>
    ).value$.pipe(
      distinctUntilChanged(),
      map(Boolean),
      takeUntil(this.destroy$)
    );

    (
      this.form.get(['kkKusurKtlgHat', 'hatKodu']) as FormControl<string>
    ).disabledWhile(persists$);

    this.facade.addKatalogGorselSuccess$
      .pipe(distinctUntilChanged(), filter(Boolean), takeUntil(this.destroy$))
      .subscribe(() => {
        this.gorselUploader.clear();
      });
  }

  uploadImage(event: { files: File[] }) {
    console.log(event.files);
    const body = new FormData();
    body.set('upload', event.files[0]);
    const hatKodu = (
      this.form.get(['kkKusurKtlgHat', 'hatKodu']) as FormControl<string>
    ).value;
    this.facade.addGorsel(
      body,
      this.kusurKatalog.kkKusurKtlgHat.kusurKodu,
      hatKodu
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  deleteImage(event: any) {
    /* this.confirmationService.confirm({
      accept: () => {
        this.facade.removeGorsel(
          event.gorsel,
          this.kusurKatalog.kkKusurKtlgHat.kusurKodu,
          this.kusurKatalog.kkKusurKtlgHat.hatKodu
        );
      },
      message: 'Görseli silmek istediğinizden emin misiniz?',
      target: event.$event.target,
      icon: 'pi pi-exclamation-triangle',
    }); */
    this.facade.removeGorsel(
      event.gorsel,
      this.kusurKatalog.kkKusurKtlgHat.kusurKodu,
      this.kusurKatalog.kkKusurKtlgHat.hatKodu
    );
  }

  clearForm() {
    const islemTipi = this.kusurKatalog.kkKusurKtlgHat.id
      ? IslemTipi.GUNCELLEME
      : IslemTipi.KAYIT;
    this.form.reset({
      kkKusurKtlgHat: {
        hatKodu: this.kusurKatalog.kkKusurKtlgHat.hatKodu,
        kusurKodu: this.kusurKatalog.kkKusurKtlgHat.kusurKodu,
        id: this.kusurKatalog.kkKusurKtlgHat.id,
        etag: this.kusurKatalog.kkKusurKtlgHat.etag,
        islemTipiNo: islemTipi,
      },
      kkKusurKtlgKokNedenList: [],
      kkKusurKtlgMuhOprYorumList: [],
      kkKusurKtlgOnlemlerList: [],
      kkKusurKtlgSiddetTanimList: [],
      kkKusurKtlgYatkinKalitelerList: [],
      kkKusurKtlgYogunlukTanimList: [],
    });
  }

  onSubmit() {
    if (!this.form.valid) {
      return;
    }
    const katalogView = this.form.getRawValue();
    const persists = !!katalogView.kkKusurKtlgHat.id;
    const islemTipi = persists ? IslemTipi.GUNCELLEME : IslemTipi.KAYIT;

    const formValues = {
      ...katalogView,
      kkKusurKtlgHat: {
        ...katalogView.kkKusurKtlgHat,
        islemTipiNo: islemTipi,
      },
    };

    if (persists) {
      this.facade.updateKusurKatalogView(formValues);
    } else this.facade.saveNewKusurKatalogView(formValues);
  }

  showImage(dokumanId: string) {
    this.originalSource$ = this.gorselService.getOriginalImage(dokumanId);
  }
}
