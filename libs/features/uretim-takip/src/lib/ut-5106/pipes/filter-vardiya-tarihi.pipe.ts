import { Pipe, PipeTransform } from '@angular/core';
import { UtAsitlemeRejenerasyonModel } from '@euys/api-interfaces';
@Pipe({
  name: 'filterVardiyaTarihi',
})
export class FilterVardiyaTarihiPipe implements PipeTransform {
  transform(value: UtAsitlemeRejenerasyonModel[], vardiyaTarihi: Date[]): UtAsitlemeRejenerasyonModel[] {
    if (vardiyaTarihi != null) {
      console.log("T", vardiyaTarihi.filter(Boolean))
      if(vardiyaTarihi.filter(Boolean).length === 1) {
        // TODO : Seçilen güne ait verileri filtrele
        return [...value];
      }else {
      const bitisTarihi = new Date(vardiyaTarihi[1]);
      bitisTarihi.setHours(23, 59, 59, 999);

      return value.filter(
        (p: UtAsitlemeRejenerasyonModel) =>
          p.vardiyaTarihiDate >= vardiyaTarihi[0] &&
          p.vardiyaTarihiDate <= bitisTarihi
      );
      }
    } else {
      return [...value]
    }
  }
}
