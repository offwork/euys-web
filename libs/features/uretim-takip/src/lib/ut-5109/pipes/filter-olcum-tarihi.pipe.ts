import { Pipe, PipeTransform } from '@angular/core';
import { UtMerkezHaddeYagEmulsiyonModel } from '@euys/api-interfaces';
@Pipe({
  name: 'filterOlcumTarihi',
})
export class FilterOlcumTarihiPipe implements PipeTransform {
  transform(value: UtMerkezHaddeYagEmulsiyonModel[], olcumTarihi: Date[]): UtMerkezHaddeYagEmulsiyonModel[] {
    if (olcumTarihi != null) {
      console.log("T", olcumTarihi.filter(Boolean))
      if(olcumTarihi.filter(Boolean).length === 1) {
        // TODO : Seçilen güne ait verileri filtrele
        return [...value];
      }else {
      const bitisTarihi = new Date(olcumTarihi[1]);
      bitisTarihi.setHours(23, 59, 59, 999);

      return value.filter(
        (p: UtMerkezHaddeYagEmulsiyonModel) =>
          p.olcumTarihiDate >= olcumTarihi[0] &&
          p.olcumTarihiDate <= bitisTarihi
      );
      }
    } else {
      return [...value]
    }
  }
}
