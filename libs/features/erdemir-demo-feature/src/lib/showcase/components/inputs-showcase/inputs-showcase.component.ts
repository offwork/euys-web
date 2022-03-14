/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl } from '@ngneat/reactive-forms';
import { Mamul } from '../../models';
import { MamulService } from '../../services/mamul.service';
import { PrimeNGConfig } from 'primeng/api';
import { CodeFragment } from '@euys/shared/ui';
import {
  fragments1,
  fragments10,
  fragments11,
  fragments2,
  fragments3,
  fragments4,
  fragments5,
  fragments6,
  fragments7,
  fragments8,
  fragments9,
} from '../../fragments';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'euys-inputs-showcase',
  templateUrl: './inputs-showcase.component.html',
  styleUrls: ['./inputs-showcase.component.scss'],
})
export class InputsShowcaseComponent implements OnInit {
  displayBasic: boolean;
  element: any;
  employeeData: any;

  cities: City[];

  patternPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
  tel: string = null;
  tel2: string = null;

  formName2: FormControl<string>;
  formTel2: FormControl<string>;
  formDate1: FormControl<Date>;
  formDate2: FormControl<Date>;
  formMail2: FormControl<string>;
  formCurrency2: FormControl<number>;
  formPassword2: FormControl<string>;
  formNumber2: FormControl<number>;
  formCity2: FormControl<City>;
  formMamul2: FormControl<Mamul>;
  mamuls: Mamul[] = [];
  fragments1: CodeFragment[] = fragments1;
  fragments2: CodeFragment[] = fragments2;
  fragments3: CodeFragment[] = fragments3;
  fragments4: CodeFragment[] = fragments4;
  fragments5: CodeFragment[] = fragments5;
  fragments6: CodeFragment[] = fragments6;
  fragments7: CodeFragment[] = fragments7;
  fragments8: CodeFragment[] = fragments8;
  fragments9: CodeFragment[] = fragments9;
  fragments10: CodeFragment[] = fragments10;
  fragments11: CodeFragment[] = fragments11;

  constructor(private readonly mamulService: MamulService, private primengConfig: PrimeNGConfig) {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];

    this.formName2 = new FormControl('Taner Topaç', Validators.required);
    this.formTel2 = new FormControl(null, Validators.required);
    this.formDate1 = new FormControl(null);
    this.formDate2 = new FormControl(null, Validators.required);
    this.formMail2 = new FormControl('mehmet', Validators.required);
    this.formCurrency2 = new FormControl(999999.99, Validators.required);
    this.formPassword2 = new FormControl('kmvATkm&7793?038', [
      Validators.required,
      Validators.pattern(this.patternPassword),
    ]);
    this.formNumber2 = new FormControl(5, Validators.required);
    this.formCity2 = new FormControl(this.cities[2], Validators.required);
    this.formMamul2 = new FormControl(null, Validators.required);
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  autoCompleteMamul(event: { query: string }) {
    this.mamulService.autoComplete(event.query).subscribe((data) => {
      this.mamuls = data;
    });
  }
}
