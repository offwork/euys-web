import { Pipe, PipeTransform } from '@angular/core';
import { UtIsletmeHaddeYagEmulsiyonModel } from '@euys/api-interfaces';
@Pipe({
  name: 'filterVardiyaTarihi',
})
export class FilterVardiyaTarihiPipe implements PipeTransform {
  transform(
    value: UtIsletmeHaddeYagEmulsiyonModel[],
    vardiyaTarihi: Date[]
  ): UtIsletmeHaddeYagEmulsiyonModel[] {
    if (vardiyaTarihi != null) {
      console.log('T', vardiyaTarihi.filter(Boolean));
      if (vardiyaTarihi.filter(Boolean).length === 1) {
        // TODO : Seçilen güne ait verileri filtrele
        return [...value];
      } else {
        const bitisTarihi = new Date(vardiyaTarihi[1]);
        bitisTarihi.setHours(23, 59, 59, 999);

        return value.filter(
          (p: UtIsletmeHaddeYagEmulsiyonModel) =>
            p.vardiyaTarihiDate >= vardiyaTarihi[0] &&
            p.vardiyaTarihiDate <= bitisTarihi
        );
      }
    } else {
      return [...value];
    }
  }
}
