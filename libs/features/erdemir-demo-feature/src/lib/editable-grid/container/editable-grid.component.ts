import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Validators } from '@angular/forms';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@ngneat/reactive-forms';
import { BehaviorSubject } from 'rxjs';

interface Isgucu {
  tesisAd: string;
  ocak: number | null;
  subat: number | null;
  mart: number | null;
  nisan: number | null;
  mayis: number | null;
  haziran: number | null;
  temmuz: number | null;
  agustos: number | null;
  eylul: number | null;
  ekim: number | null;
  kasim: number | null;
  aralik: number | null;
}

const fakeData: () => Isgucu[] = () => [
  {
    tesisAd: 'Çelikhane',
    ocak: 0.224,
    subat: 0.237,
    mart: 0.229,
    nisan: 0.253,
    mayis: 0.276,
    haziran: 0.233,
    temmuz: 0.226,
    agustos: null,
    eylul: null,
    ekim: null,
    kasim: null,
    aralik: null,
  },
  {
    tesisAd: 'Sürekli Dökümler',
    ocak: 0.185,
    subat: 0.198,
    mart: 0.193,
    nisan: 0.208,
    mayis: 0.227,
    haziran: 0.193,
    temmuz: 0.184,
    agustos: null,
    eylul: null,
    ekim: null,
    kasim: null,
    aralik: null,
  },
  {
    tesisAd: '1. Sıcak Haddehane',
    ocak: 0.702,
    subat: 0.597,
    mart: 0.527,
    nisan: 0.496,
    mayis: 0.566,
    haziran: 0.501,
    temmuz: 0.451,
    agustos: null,
    eylul: null,
    ekim: null,
    kasim: null,
    aralik: null,
  },
];

@Component({
  selector: 'euys-editable-grid',
  templateUrl: './editable-grid.component.html',
  styleUrls: ['./editable-grid.component.scss'],
  encapsulation: ViewEncapsulation.None,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: { class: 'editable-grid-component' },
})
export class EditableGridComponent implements OnInit {
  loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  forms: FormArray<FormGroup<Isgucu>> = new FormArray<FormGroup<Isgucu>>([]);
  cols = [
    {
      id: 'tesisAd',
      title: 'TESİS',
      input: false,
    },
    {
      id: 'ocak',
      title: 'OCAK',
      input: true,
      type: 'text',
    },
    {
      id: 'subat',
      title: 'ŞUBAT',
      input: true,
      type: 'text',
    },
    {
      id: 'mart',
      title: 'MART',
      input: true,
      type: 'text',
    },
    {
      id: 'nisan',
      title: 'NİSAN',
      input: true,
      type: 'text',
    },
    {
      id: 'mayis',
      title: 'MAYIS',
      input: true,
      type: 'text',
    },
    {
      id: 'haziran',
      title: 'HAZİRAN',
      input: true,
      type: 'text',
    },
    {
      id: 'temmuz',
      title: 'TEMMUZ',
      input: true,
      type: 'text',
    },
    {
      id: 'agustos',
      title: 'AĞUSTOS',
      input: true,
      type: 'text',
    },
    {
      id: 'eylul',
      title: 'EYLÜL',
      input: true,
      type: 'text',
    },
    {
      id: 'ekim',
      title: 'EKIM',
      input: true,
      type: 'text',
    },
    {
      id: 'kasim',
      title: 'KASIM',
      input: true,
      type: 'text',
    },
    {
      id: 'aralik',
      title: 'ARALIK',
      input: true,
      type: 'text',
    },
  ];
  data: Isgucu[] = [];
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loading$.next(true);
    setTimeout(() => {
      this.loadData();
    }, 2000);
  }

  loadData(): void {
    const data = fakeData();
    for (const row of data) {
      const formGroup: FormGroup<Isgucu> = this.fb.group(row, {
        validators: [Validators.required],
      });
      this.forms.push(formGroup);
    }
    this.data = data;
    this.loading$.next(false);
  }

  getValidationMsg(control: AbstractControl) {
    if (control.errors) {
      return 'Required';
    } else return '';
  }
}
