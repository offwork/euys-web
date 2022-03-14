/* eslint-disable @typescript-eslint/ban-ts-comment */
import { CodeFragment } from '@euys/shared/ui';

export const fragments1: CodeFragment[] = [
  {
    name: 'inputs-showcase.component.html',
    code: `
<div class="p-fluid">
  <span class="p-float-label">
    <input id="username1" type="text" pInputText>
    <label for="username1">Adı Soyadı</label>
  </span>
  <small id="username1-help">Adınızı ve Soyadınızı giriniz.</small>
</div>

<div class="p-fluid">
  <span class="p-float-label">
    <input id="username2" type="text" pInputText [formControl]="formName2">
    <label for="username2">Adı Soyadı</label>
  </span>
  <small *ngIf="formName2.valid || formName2.pristine" id="username2-help">Adınızı ve Soyadınızı giriniz.</small>
  <small *ngIf="formName2.hasError('required') && (formName2.dirty || formName2.touched)" id="username2-help" class="p-error">Ad Soyad zorunludur.</small>
</div>`,
  },
  {
    name: 'inputs-showcase.component.ts',
    code: `
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import { FormControl } from '@ngneat/reactive-forms';


@Component({
  selector: 'euys-inputs-showcase',
  templateUrl: './inputs-showcase.component.html',
  styleUrls: ['./inputs-showcase.component.scss']
})
export class InputsShowcaseComponent implements OnInit {

  formName2: FormControl<string>;

  constructor(
    private primengConfig: PrimeNGConfig
  ) {
    this.formName2 = new FormControl('Taner Topaç', Validators.required);
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

}`,
  },
];

export const fragments2: CodeFragment[] = [
  {
    name: 'inputs-showcase.component.html',
    code: `
<div class="p-fluid">
  <span class="p-float-label">
    <input id="username2" type="text" pInputText disabled>
    <label for="username1">Disabled</label>
  </span>
  <small id="username1-help">Adınızı ve Soyadınızı giriniz.</small>
</div>
<div class="p-fluid">
  <span class="p-float-label">
    <input id="username2" type="text" pInputText [value]="'Taner Topaç'" readonly>
    <label for="username2">Readonly</label>
  </span>
  <small id="username2-help">Adınızı ve Soyadınızı giriniz.</small>
</div>`,
  },
];

export const fragments3: CodeFragment[] = [
  {
    name: 'inputs-showcase.component.html',
    code: `
<div class="p-fluid">
  <span class="p-float-label">
    <p-inputMask id="telNo1" mask="(999) 999-9999" [(ngModel)]="tel"></p-inputMask>
    <label for="telNo1">Telefon Numarası</label>
  </span>
  <small id="username2-help">10 haneli telefon numaranızı giriniz</small>
</div>
<div class="p-fluid">
  <span class="p-float-label">
    <p-inputMask id="telNo2" mask="(999) 999-9999" [formControl]="formTel2"></p-inputMask>
    <label for="telNo2">Telefon Numarası</label>
  </span>
  <small *ngIf="formTel2.valid || formTel2.pristine" id="telNo2-help">10 haneli telefon numaranızı giriniz.</small>
  <small *ngIf="formTel2.hasError('required') && (formTel2.touched || formTel2.dirty)" id="telNo2-error" class="p-error">Telefon numarası zorunludur.</small>
</div>`,
  },
  {
    name: 'inputs-showcase.component.ts',
    code: `
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import { FormControl } from '@ngneat/reactive-forms';


@Component({
  selector: 'euys-inputs-showcase',
  templateUrl: './inputs-showcase.component.html',
  styleUrls: ['./inputs-showcase.component.scss']
})
export class InputsShowcaseComponent implements OnInit {

  formTel2: FormControl<string>;

  constructor(
    private primengConfig: PrimeNGConfig
  ) {
    this.formTel2 = new FormControl(null, Validators.required);
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

}`,
  },
];

export const fragments4: CodeFragment[] = [
  {
    name: 'inputs-showcase.component.html',
    code: `
<div class="p-fluid">
  <span class="p-float-label">
    <p-calendar dateFormat="dd/mm/yy" inputId="dateformat" [formControl]="formDate1" [showIcon]="true"></p-calendar>
    <label for="dateformat">DateFormat (dd/mm/yyyy)</label>
  </span>
</div>
<div class="p-fluid">
  <span class="p-float-label">
    <p-calendar dateFormat="dd/mm/yy" inputId="dateformat2" [formControl]="formDate2" [showIcon]="true"></p-calendar>
    <label for="dateformat2">DateFormat (dd/mm/yyyy)</label>
  </span>
  <small *ngIf="formDate2.hasError('required') && (formDate2.touched || formDate2.dirty)" id="formDate2-error" class="p-error">Tarih zorunludur.</small>
</div>`,
  },
  {
    name: 'inputs-showcase.component.ts',
    code: `
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import { FormControl } from '@ngneat/reactive-forms';


@Component({
  selector: 'euys-inputs-showcase',
  templateUrl: './inputs-showcase.component.html',
  styleUrls: ['./inputs-showcase.component.scss']
})
export class InputsShowcaseComponent implements OnInit {

  formDate1: FormControl<Date>;
  formDate2: FormControl<Date>;

  constructor(
    private primengConfig: PrimeNGConfig
  ) {
    this.formDate1 = new FormControl(null);
    this.formDate2 = new FormControl(null, Validators.required);
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

}`,
  },
];

export const fragments5: CodeFragment[] = [
  {
    name: 'inputs-showcase.component.html',
    code: `
<div class="p-fluid">
  <div class="p-inputgroup">
    <span class="p-inputgroup-addon"><i class="pi pi-search"></i></span>
    <input id="search1" type="text" pInputText placeholder="Ara">
  </div>
  <small id="search1-help">Aramak için yazınız.</small>
</div>
<div class="p-fluid">
  <div class="p-inputgroup">
    <span class="p-inputgroup-addon"><i class="pi pi-search"></i></span>
    <input id="search2" type="text" pInputText placeholder="Ara" [value]="'Çelik'">
  </div>
  <small id="search2-help">Aramak için yazınız.</small>
</div>`,
  },
  {
    name: 'inputs-showcase.component.ts',
    code: `
import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'euys-inputs-showcase',
  templateUrl: './inputs-showcase.component.html',
  styleUrls: ['./inputs-showcase.component.scss']
})
export class InputsShowcaseComponent implements OnInit {


  constructor(
    private primengConfig: PrimeNGConfig
  ) {
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

}`,
  },
];

export const fragments6: CodeFragment[] = [
  {
    name: 'inputs-showcase.component.html',
    code: `
<div class="p-fluid">
  <div class="p-inputgroup">
    <input id="email1" type="text" pInputText placeholder="Mail Adresi">
    <span class="p-inputgroup-addon">@erdemir.com.tr</span>
  </div>
</div>
<div class="p-fluid">
  <div class="p-inputgroup">
    <input id="email2" type="text" pInputText placeholder="Mail Adresi" [formControl]="formMail2">
    <span class="p-inputgroup-addon">@erdemir.com.tr</span>
  </div>
  <small *ngIf="formMail2.hasError('required') && (formMail2.touched || formMail2.dirty)" id="email2-help" class="p-error">Mail adresi zorunludur.</small>
</div>`,
  },
  {
    name: 'inputs-showcase.component.ts',
    code: `
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import { FormControl } from '@ngneat/reactive-forms';


@Component({
  selector: 'euys-inputs-showcase',
  templateUrl: './inputs-showcase.component.html',
  styleUrls: ['./inputs-showcase.component.scss']
})
export class InputsShowcaseComponent implements OnInit {

  formMail2: FormControl<string>;

  constructor(
    private primengConfig: PrimeNGConfig
  ) {
    this.formMail2 = new FormControl('mehmet', Validators.required);
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

}`,
  },
];

export const fragments7: CodeFragment[] = [
  {
    name: 'inputs-showcase.component.html',
    code: `
<div class="p-fluid">
  <div class="p-inputgroup">
    <p-inputNumber inputId="currency1" [style.width]="'100%'" mode="decimal" locale="tr-TR" [minFractionDigits]="2" [maxFractionDigits]="2" placeholder="Tutar">
    </p-inputNumber>
    <span class="p-inputgroup-addon">₺</span>
  </div>
</div>
<div class="p-fluid">
  <div class="p-inputgroup">
    <p-inputNumber [formControl]="formCurrency2" [style.width]="'100%'" inputId="currency2" mode="decimal" locale="tr-TR" [minFractionDigits]="2" [maxFractionDigits]="2" placeholder="Tutar">
    </p-inputNumber>
    <span class="p-inputgroup-addon">₺</span>
  </div>
  <small *ngIf="formCurrency2.hasError('required') && (formCurrency2.touched || formCurrency2.dirty)" id="currency2-help" class="p-error">Tutar zorunludur.</small>
</div>`,
  },
  {
    name: 'inputs-showcase.component.ts',
    code: `
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import { FormControl } from '@ngneat/reactive-forms';


@Component({
  selector: 'euys-inputs-showcase',
  templateUrl: './inputs-showcase.component.html',
  styleUrls: ['./inputs-showcase.component.scss']
})
export class InputsShowcaseComponent implements OnInit {

  formCurrency2: FormControl<number>;

  constructor(
    private primengConfig: PrimeNGConfig
  ) {
    this.formCurrency2 = new FormControl(999999.99, Validators.required);
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

}`,
  },
];

export const fragments8: CodeFragment[] = [
  {
    name: 'inputs-showcase.component.html',
    code: `
<div class="p-fluid">
  <p-dropdown [options]="cities" optionLabel="name" [filter]="true" filterBy="name"
    [showClear]="true" placeholder="Şehir">
  </p-dropdown>
</div>
<div class="p-fluid">
  <p-dropdown [options]="cities" [formControl]="formCity2" optionLabel="name" [filter]="true" filterBy="name"
    [showClear]="true" placeholder="Şehir">
  </p-dropdown>
  <small *ngIf="formCity2.hasError('required') && (formCity2.dirty || formCity2.touched)" id="city2-help" class="p-error">Şehir Seçiniz.</small>
</div>`,
  },
  {
    name: 'inputs-showcase.component.ts',
    code: `
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import { FormControl } from '@ngneat/reactive-forms';


@Component({
  selector: 'euys-inputs-showcase',
  templateUrl: './inputs-showcase.component.html',
  styleUrls: ['./inputs-showcase.component.scss']
})
export class InputsShowcaseComponent implements OnInit {

  formCurrency2: FormControl<number>;

  constructor(
    private primengConfig: PrimeNGConfig
  ) {
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
    ];

    this.formCity2 = new FormControl(this.cities[2], Validators.required);
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

}`,
  },
];

export const fragments9: CodeFragment[] = [
  {
    name: 'inputs-showcase.component.html',
    code: `
<div class="p-fluid">
  <span class="p-float-label">
    <p-autoComplete [suggestions]="mamuls" inputId="mamul1-input" (completeMethod)="autoCompleteMamul($event)" [forceSelection]="true" field="mamulAdi" [dropdown]="true"></p-autoComplete>
    <label for="mamul1-input">Mamul</label>
  </span>
</div>
<div class="p-fluid">
  <span class="p-float-label">
    <p-autoComplete [suggestions]="mamuls" inputId="mamul2-input" [formControl]="formMamul2" (completeMethod)="autoCompleteMamul($event)" [forceSelection]="true" field="mamulAdi" [dropdown]="true"></p-autoComplete>
    <label for="mamul2-input">Mamul</label>
    <small *ngIf="formMamul2.hasError('required') && (formMamul2.dirty || formMamul2.touched)" id="mamul2-help" class="p-error">
      Mamul seçimi zorunludur.
    </small>
  </span>
</div>`,
  },
  {
    name: 'inputs-showcase.component.ts',
    code: `
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import { FormControl } from '@ngneat/reactive-forms';
import { Mamul } from '../../models';
import { MamulService } from '../../services/mamul.service';


@Component({
  selector: 'euys-inputs-showcase',
  templateUrl: './inputs-showcase.component.html',
  styleUrls: ['./inputs-showcase.component.scss']
})
export class InputsShowcaseComponent implements OnInit {

  formMamul2: FormControl<Mamul>;
  mamuls: Mamul[] = [];

  constructor(
    private readonly mamulService: MamulService,
    private primengConfig: PrimeNGConfig
  ) {
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
    ];

    this.formMamul2 = new FormControl(null,  Validators.required);
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  autoCompleteMamul(event: {query: string}) {
    this.mamulService.autoComplete(event.query).subscribe(data => {
      this.mamuls = data;
    });
  }

}`,
  },
  {
    name: 'mamul.service.ts',
    code: `
import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Mamul } from '../models';
import { HttpProviderService } from '@euys/core';

@Injectable()
export class MamulService {

  constructor(private http: HttpProviderService) { }

  autoComplete(mamulRumuzu: string): Observable<Mamul[]> {
    return this.http.request('GET', '/mamuller/autocomplete', null, {
      params: new HttpParams({ fromObject: { mamulRumuzu } }),
    }).pipe(
      map(({body}) => body as Mamul[])
    );
  }
}
`,
  },
  {
    name: 'models.ts',
    code: `
export interface Mamul {
  mamulAdi: string;
  mamulNo: string;
  mamulGrupNo: number;
  mamulGrupAdi: string;
  urunTipi: {
    id: number;
    value: string;
    sKapasite: boolean;
  };
  urunAnaGrupNo: string;
  urunAnaGrupAdi: string;
}
`,
  },
];

export const fragments10: CodeFragment[] = [
  {
    name: 'inputs-showcase.component.html',
    code: `
<div class="p-fluid">
  <span class="p-float-label">
    <input id="password1" type="password" pInputText>
    <label for="password1">Parola</label>
  </span>
  <small id="password1-help">Parola giriniz.</small>
</div>
<div class="p-fluid">
  <span class="p-float-label">
    <input id="password2" type="password" pInputText [formControl]="formPassword2">
    <label for="password2">Parola</label>
  </span>
  <small *ngIf="formPassword2.valid || formPassword2.pristine" id="password2-help">Parolanızı giriniz.</small>
  <small *ngIf="formPassword2.hasError('required') && (formPassword2.dirty || formPassword2.touched)" id="password2-help" class="p-error">Parola zorunludur.</small>
  <small *ngIf="formPassword2.hasError('pattern') && (formPassword2.dirty || formPassword2.touched)" id="password2-help" class="p-error">
    Parolanız en az bir büyük harf, bir rakam ve bir özel karakterden (#$@!%&*?) oluşmalıdır. En az 8, en fazla 30 karakter olabilir.
  </small>
</div>`,
  },
  {
    name: 'inputs-showcase.component.ts',
    code: `
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import { FormControl } from '@ngneat/reactive-forms';


@Component({
  selector: 'euys-inputs-showcase',
  templateUrl: './inputs-showcase.component.html',
  styleUrls: ['./inputs-showcase.component.scss']
})
export class InputsShowcaseComponent implements OnInit {

  patternPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*)(?=.*[#$@!%&*?])[A-Za-z#$@!%&*?]{8,30}$/;
  formPassword2: FormControl<string>;

  constructor(
    private readonly mamulService: MamulService,
    private primengConfig: PrimeNGConfig
  ) {

    this.formPassword2 = new FormControl('kmvATkm&7793?038', [Validators.required, Validators.pattern(this.patternPassword)]);
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

}`,
  },
];

export const fragments11: CodeFragment[] = [
  {
    name: 'inputs-showcase.component.html',
    code: `
<div class="p-fluid">
  <span class="p-float-label">
    <p-inputNumber [style.width]="'100%'" inputId="number1" mode="decimal" locale="tr-TR" locale="tr-TR" [minFractionDigits]="0" [maxFractionDigits]="0" [showButtons]="true">
    </p-inputNumber>
    <label for="number1">Sayı</label>
  </span>
  </div>
<div class="p-fluid">
  <span class="p-float-label">
    <p-inputNumber [formControl]="formNumber2" [style.width]="'100%'" inputId="number2" mode="decimal" locale="tr-TR" locale="tr-TR" [minFractionDigits]="0" [maxFractionDigits]="0" [showButtons]="true">
    </p-inputNumber>
    <label for="number2">Sayı</label>
  </span>
  <small *ngIf="formNumber2.hasError('required') && (formNumber2.touched || formNumber2.dirty)" id="number2-help" class="p-error">Sayı zorunludur.</small>
</div>`,
  },
  {
    name: 'inputs-showcase.component.ts',
    code: `
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import { FormControl } from '@ngneat/reactive-forms';


@Component({
  selector: 'euys-inputs-showcase',
  templateUrl: './inputs-showcase.component.html',
  styleUrls: ['./inputs-showcase.component.scss']
})
export class InputsShowcaseComponent implements OnInit {

  formNumber2: FormControl<number>;

  constructor(
    private readonly mamulService: MamulService,
    private primengConfig: PrimeNGConfig
  ) {

    this.formNumber2 = new FormControl(5, Validators.required);
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

}`,
  },
];

export const fragments12: CodeFragment[] = [
  {
    name: 'custom-components-showcase.component.html',
    code: `
<form id="pageForm" [formGroup]="sampleForm" (ngSubmit)="submitForm()">
  <div class="grid grid-cols-1 gap-2 mb-1">
    <euys-table-multi-select
      [options]="items"
      [style.width]="'100%'"
      formControlName="hatlar"
      optionLabel="name"
      optionValue="value"
      id="hatlar"
    >
    </euys-table-multi-select>
    <small
      id="hatlar-help"
      class="p-error"
      *ngIf="sampleForm.get('hatlar').errors?.required && (sampleForm.get('hatlar').touched || sampleForm.get('hatlar').dirty)"
    >
      Hat Seçimi Zorunludur!
    </small>
  </div>

  <div class="grid grid-cols-6">
    <button pButton id="pageForm_submit" type="submit" class="p-button p-button-rounded w-full" [disabled]="!sampleForm.valid">
      <i class="pi pi-save mr-2"></i> Kaydet
    </button>
  </div>
</form>
`,
  },
  {
    name: 'custom-components-showcase.component.ts',
    code: `
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@ngneat/reactive-forms';

interface NameValue {
  name: string;
  value: unknown;
}

@Component({
  selector: 'euys-custom-components-showcase',
  templateUrl: './custom-components-showcase.component.html',
  styleUrls: ['./custom-components-showcase.component.scss']
})
export class CustomComponentsShowcaseComponent implements OnInit {

  sampleForm: FormGroup;
  items: NameValue[] = [
    {
      name: 'Hat 1',
      value: '001'
    },
    {
      name: 'Hat 2',
      value: '002'
    },
    {
      name: 'Çooook Uzun bir Hat İsmi',
      value: '016'
    }
  ];
  constructor() {
    console.log('construct!');
    this.sampleForm = new FormGroup({
      hatlar: new FormControl<unknown>({
        value: ['001', '016'],
        disabled: false
      }, Validators.required)
    });
  }

  ngOnInit(): void {
    console.log('init!');
  }

  submitForm() {
    if(!this.sampleForm.valid) {
      return;
    }
    alert(JSON.stringify(this.sampleForm.value));

  }

}
`,
  },
];

export const fragments13: CodeFragment[] = [
  {
    name: 'custom-components-showcase.component.html',
    code: `
<form id="pageForm2" [formGroup]="sampleForm2" (ngSubmit)="submitForm2()">
  <div class="grid grid-cols-1 gap-2 mb-1">
    <euys-table-multi-select
      [options]="items"
      [style.width]="'100%'"
      formControlName="hatlar"
      optionLabel="name"
      [compareFn]="compareFn"
      id="hatlar2"
    >
      <ng-template euysTableMultiSelectItem let-option>
        {{option.value}}
      </ng-template>
    </euys-table-multi-select>
    <small
      id="hatlar2-help"
      class="p-error"
      *ngIf="sampleForm2.get('hatlar').errors?.required && (sampleForm2.get('hatlar').touched || sampleForm2.get('hatlar').dirty)"
    >
      Hat Seçimi Zorunludur!
    </small>
  </div>

  <div class="grid grid-cols-6">
    <button pButton id="pageForm2_submit" type="submit" class="p-button p-button-rounded w-full" [disabled]="!sampleForm2.valid">
      <i class="pi pi-save mr-2"></i> Kaydet
    </button>
  </div>
</form>
`,
  },
  {
    name: 'custom-components-showcase.component.ts',
    code: `
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@ngneat/reactive-forms';

interface NameValue {
  name: string;
  value: unknown;
}

@Component({
  selector: 'euys-custom-components-showcase',
  templateUrl: './custom-components-showcase.component.html',
  styleUrls: ['./custom-components-showcase.component.scss']
})
export class CustomComponentsShowcaseComponent implements OnInit {

  sampleForm2: FormGroup;
  items: NameValue[] = [
    {
      name: 'Hat 1',
      value: '001'
    },
    {
      name: 'Hat 2',
      value: '002'
    },
    {
      name: 'Çooook Uzun bir Hat İsmi',
      value: '016'
    }
  ];
  compareFn = (o1: NameValue, o2: NameValue) => o1.value === o2.value;
  constructor() {
    this.sampleForm2 = new FormGroup({
      hatlar: new FormControl<unknown>({
        value: [
          {
            name: 'Hat 1',
            value: '001'
          },
          {
            name: 'Çooook Uzun bir Hat İsmi',
            value: '016'
          }
        ],
        disabled: false
      }, Validators.required)
    });
  }

  ngOnInit(): void {
    console.log('init!');
  }

  submitForm2() {
    if(!this.sampleForm2.valid) {
      return;
    }
    alert(JSON.stringify(this.sampleForm2.value));

  }

}`,
  },
];
