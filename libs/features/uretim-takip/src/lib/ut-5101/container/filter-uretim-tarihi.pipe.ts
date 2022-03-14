import { Pipe, PipeTransform } from '@angular/core';
import { UtCinkoLapa } from '@euys/api-interfaces';

/**
 * READ ME:
 *
 * Container, front-end evreninde akıllı bileşen denilen kavramlar
 * için kullanılmaktadır.
 *
 * Henüz container ya da smart Pipe diye bir kavram geliştirilmedi.
 * Karmaşaya neden olduğunuzu unutmayın!
 *
 * Best Practice için Angular'ın temel yapıtaşlarının kendilerine
 * ait klasörleri olmalı.
 */
@Pipe({
  name: 'filterUtCinkoLapa',
})
export class FilterCinkoLapaPipe implements PipeTransform {
  transform(value: UtCinkoLapa[], vardiyatarihi: Date[]): UtCinkoLapa[] {
    if (vardiyatarihi != null) {
      const bitisTarihi = new Date(vardiyatarihi[1]);
      bitisTarihi.setHours(23, 59, 59, 999);

      return value.filter(
        (p: UtCinkoLapa) =>
          p.uretimTarihiDate >= vardiyatarihi[0] &&
          p.uretimTarihiDate <= bitisTarihi
      );
    } else {
      vardiyatarihi = [
        new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
        new Date(Date.now()),
      ];
      return value.filter(
        (p: UtCinkoLapa) =>
          p.uretimTarihiDate >= vardiyatarihi[0] &&
          p.uretimTarihiDate <= vardiyatarihi[1]
      );
    }
  }
}
