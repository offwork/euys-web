import { Pipe, PipeTransform } from '@angular/core';
import { UtTankDurulama } from '@euys/api-interfaces';
@Pipe({
  name: 'filterOlcumTarihi',
})
export class FilterOlcumTarihiPipe implements PipeTransform {
  transform(value: UtTankDurulama[], olcumTarihi: Date[]): UtTankDurulama[] {
    if (olcumTarihi != null) {
      const bitisTarihi = new Date(olcumTarihi[1]);
      bitisTarihi.setHours(23, 59, 59, 999);

      return value.filter(
        (p: UtTankDurulama) =>
          p.olcumTarihiDate >= olcumTarihi[0] &&
          p.olcumTarihiDate <= bitisTarihi
      );
    } else {
      olcumTarihi = [
        new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
        new Date(Date.now()),
      ];
      return value.filter(
        (p: UtTankDurulama) =>
          p.olcumTarihiDate >= olcumTarihi[0] &&
          p.olcumTarihiDate <= olcumTarihi[1]
      );
    }
  }
}
