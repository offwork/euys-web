import { Pipe, PipeTransform } from '@angular/core';
import { Isgucu } from '@euys/api-interfaces';

@Pipe({
  name: 'placeholder',
})
export class PlaceholderPipe implements PipeTransform {
  transform(value: Isgucu[], month: string): string {
    const isgucu = value.find(({ ay }) => ay === month);
    if (!isgucu) {
      return '';
    }
    const {
      yil,
      ay,
      celikhaneIsgucu,
      kokIsgucu,
      sicak1Isgucu,
      sicak2Isgucu,
      sinterIsgucu,
      soguk1Isgucu,
      soguk2Isgucu,
      surekliIsgucu,
      yuksekfirinIsgucu,
    } = isgucu;

    const fields = [
      celikhaneIsgucu,
      kokIsgucu,
      sicak1Isgucu,
      sicak2Isgucu,
      sinterIsgucu,
      soguk1Isgucu,
      soguk2Isgucu,
      surekliIsgucu,
      yuksekfirinIsgucu,
    ];

    const validCheck1 = (input: unknown) =>
      typeof input === 'number' && input > 0;
    const validCheck2 = (input: unknown) =>
      input === null || input === undefined;

    return /[0-9]{4}/.test(yil) &&
      /[0-9]{2}/.test(ay) &&
      (fields.every(validCheck1) || fields.every(validCheck2))
      ? ''
      : 'Zorunlu alan';
  }
}
