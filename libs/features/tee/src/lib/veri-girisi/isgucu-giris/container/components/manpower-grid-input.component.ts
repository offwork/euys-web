import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Isgucu } from '@euys/api-interfaces';
import { ManpowerInputEvent } from '../models/manpower-input.model';

@Component({
  selector: 'euys-manpower-grid-input',
  templateUrl: './manpower-grid-input.component.html',
  styleUrls: ['./manpower-grid-input.component.scss'],
})
export class ManpowerGridInputComponent implements OnInit {
  @Input() data: Isgucu[];
  @Input() year: string;
  @Input() valid: boolean;
  @Output() inputValue: EventEmitter<ManpowerInputEvent> =
    new EventEmitter<ManpowerInputEvent>();

  months = Array.from(Array(12).keys()).map(i => {
    const monthFormat = new Intl.DateTimeFormat('tr', {
      month: 'long',
    });
    return {
      id: String(i + 1).padStart(2, '0'),
      value: monthFormat.format(new Date(2000, i, 1)),
    };
  });

  plants = [
    { field: 'celikhaneIsgucu', value: 'Çelikhane' },
    { field: 'surekliIsgucu', value: 'Sürekli Dökümler' },
    { field: 'sicak1Isgucu', value: '1. Sıcak Haddehane' },
    { field: 'sicak2Isgucu', value: '2. Sıcak Haddehane' },
    { field: 'soguk1Isgucu', value: '1. Soğuk Haddehane' },
    { field: 'soguk2Isgucu', value: '2. Soğuk Haddehane' },
    { field: 'sinterIsgucu', value: 'Sinter' },
    { field: 'kokIsgucu', value: 'Kok' },
    { field: 'yuksekfirinIsgucu', value: 'Yüksek Fırınlar' },
  ];

  constructor() {
    console.log('data: ', this.data);
  }

  ngOnInit(): void {
    console.log('data: ', this.data);
  }

  onInput(value: string, field: string, year: string, month: string) {
    const manpower = this.data.find(
      ({ ay, yil }) => yil === year && ay === month
    );
    const obj = {
      year,
      value,
      field,
      month,
    };

    if (manpower) {
      this.inputValue.emit({
        ...obj,
        manpower,
      });
    } else this.inputValue.emit(obj);
  }
}
