import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { CodeFragment } from '@euys/shared/ui';
import { FormControl, FormGroup } from '@ngneat/reactive-forms';
import { fragments12, fragments13 } from '../../fragments';

interface NameValue {
  name: string;
  value: unknown;
}

@Component({
  selector: 'euys-custom-components-showcase',
  templateUrl: './custom-components-showcase.component.html',
})
export class CustomComponentsShowcaseComponent implements OnInit {
  sampleForm: FormGroup;
  sampleForm2: FormGroup;
  items: NameValue[] = [
    {
      name: 'Hat 1',
      value: '001',
    },
    {
      name: 'Hat 2',
      value: '002',
    },
    {
      name: 'Çooook Uzun bir Hat İsmi',
      value: '016',
    },
  ];
  fragments12: CodeFragment[] = fragments12;
  fragments13: CodeFragment[] = fragments13;
  compareFn = (o1: NameValue, o2: NameValue) => o1.value === o2.value;

  constructor() {
    console.log('construct!');
    this.sampleForm = new FormGroup({
      hatlar: new FormControl<unknown>(
        {
          value: ['001', '016'],
          disabled: false,
        },
        Validators.required
      ),
    });
    this.sampleForm2 = new FormGroup({
      hatlar: new FormControl<unknown>(
        {
          value: [
            {
              name: 'Hat 1',
              value: '001',
            },
            {
              name: 'Çooook Uzun bir Hat İsmi',
              value: '016',
            },
          ],
          disabled: false,
        },
        Validators.required
      ),
    });
  }

  ngOnInit(): void {
    console.log('init!');
  }

  submitForm() {
    if (!this.sampleForm.valid) {
      return;
    }
    alert(JSON.stringify(this.sampleForm.value));
  }

  submitForm2() {
    if (!this.sampleForm2.valid) {
      return;
    }
    alert(JSON.stringify(this.sampleForm2.value));
  }
}
