import { Pipe, PipeTransform } from '@angular/core';
import { Isgucu } from '@euys/api-interfaces';

@Pipe({
  name: 'manpower',
})
export class ManpowerPipe implements PipeTransform {
  transform(value: Isgucu[], year: string, month: string, field: string) {
    if (!value || !value.length) {
      return null;
    }
    const index = value.findIndex(
      ({ yil, ay }) => year === yil && ay === month
    );
    if (index < 0) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return Number(`${value[index][field] || ''}`).toLocaleString('tr-TR', {
      minimumFractionDigits: 3,
      maximumFractionDigits: 3,
    });
  }
}
