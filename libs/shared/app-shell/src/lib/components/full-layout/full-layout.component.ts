/* eslint-disable @typescript-eslint/no-explicit-any */
import { Direction } from '@angular/cdk/bidi';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { Navs } from '@euys/api-interfaces';
import {
  AppConfigService,
  SessionStorageService,
  TranslationHttpLoaderService,
} from '@euys/core';
import { TranslocoService } from '@ngneat/transloco';
import { TranslocoLocaleService } from '@ngneat/transloco-locale';
import { select, Store } from '@ngrx/store';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
import { Observable, Subject } from 'rxjs';
import { pluck, takeUntil } from 'rxjs/operators';
import { APP_CLIENT_ID } from '../../tokens';
@Component({
  selector: 'euys-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.scss'],
  encapsulation: ViewEncapsulation.None,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: { class: 'euys-full-layout' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FullLayoutComponent implements OnInit, OnDestroy {
  title = 'tee-frontend';
  navs: Navs[] | any[] = [];
  hideSidenav = false;
  expandedSidenav = false;
  direction: Direction = 'ltr';
  hideMenu = true;
  toggled!: boolean;
  enableRedirect = true;
  color = 'primary';
  logo!: string;
  redirectUrl: string | any[] = ['/'];
  tooltip = 'Toplam Ekipman Etkinliği';
  profile$!: string;
  userInfo$: any;
  languages: MenuItem[];
  urlSegments$: Observable<string | unknown>;
  urlSegments: string;

  _endSubscription$ = new Subject<boolean>();

  /**
   * Creates an instance of app shell component.
   * TODO: For configurations like `Store<fromShell.State>`, you must use the store.
   * @param appConfig
   * @param translocoService
   * @param translocoLocaleService
   */
  constructor(
    private store: Store /* TODO: store uygulama icin bir config saglar,  AppConfigService ihtiyac olamayabilir!! */,
    private appConfig: AppConfigService,
    private sessionStorage: SessionStorageService,
    private translocoLocaleService: TranslocoLocaleService,
    private translocoService: TranslocoService,
    private translationHttpLoaderService: TranslationHttpLoaderService,
    private primeNGConfig: PrimeNGConfig,
    @Inject(APP_CLIENT_ID) private clientId: string
  ) {
    /* The following code block sets the `urlSegments` @Input of the Breadcrumbs Component  */
    this.store
      .pipe(
        select(state => state),
        pluck('router', 'state', 'url'),
        takeUntil(this._endSubscription$)
      )
      .subscribe(urls => (this.urlSegments = String(urls)));

    const { uygList } = JSON.parse(
      this.sessionStorage.getItem('loginInfo') || '{}'
    );
    const app = uygList?.find(
      (uygulama: any) => uygulama.clientId === this.clientId
    );
    this.navs = !app
      ? this.appConfig.config.mainNavs[0].altModuller
      : app.menuInfo;
  }

  ngOnInit() {
    this.expandedSidenav = this.appConfig.config.sideNav.expandedSidenav;

    this.languages = [
      {
        label: 'Turkish',
        command: () => {
          this.changeLanguage('tr');
        },
      },
      {
        separator: true,
      },
      {
        label: 'English',
        command: () => {
          this.changeLanguage('en');
        },
      },
    ];

    const userDefault = {
      ad: 'BAHADIR',
      authByLdap: true,
      durum: 'A',
      email: '*****',
      enable2FA: false,
      genelKullaniciId: 'IC#100649',
      kullaniciAdi: '100649',
      kullaniciId: '100649',
      ldapDurum: 0,
      listRol: [] as any[],
      parolaGecici: false,
      parolaZamanAsimi: false,
      sirketKodu: '1000',
      sirketTipi: 'IC',
      soyad: 'SEZGUN',
      telCep: '*****',
      versiyon: 1,
    };

    const { kullaniciId } = JSON.parse(
      this.sessionStorage.getItem('userInfo') || JSON.stringify(userDefault)
    );
    this.userInfo$ = JSON.parse(
      this.sessionStorage.getItem('userInfo') || JSON.stringify(userDefault)
    );
    this.profile$ = `https://apigwtest.erdemir.com.tr/int/dev/resimler/persno/${kullaniciId}`;

    this.changeLanguage();
  }

  ngOnDestroy() {
    this._endSubscription$.next(true);
    this._endSubscription$.complete();
  }

  setState(state: boolean) {
    this.expandedSidenav = state;
    this.toggled = !this.toggled;
  }

  changeLanguage(lang = 'tr') {
    const locale = lang === 'tr' ? 'tr-TR' : 'en-US';
    // TODO: used only to test for translation
    this.translocoService.setActiveLang(lang);
    this.translocoLocaleService.setLocale(locale);
    this.translationHttpLoaderService
      .getTranslation(lang)
      .pipe(takeUntil(this._endSubscription$))
      .subscribe(config => {
        const { primeng } = config;
        this.primeNGConfig.setTranslation(primeng);
      });
  }
}
