import { Pipe, PipeTransform } from '@angular/core';
import { UtKusurluIstifPaketModel } from '@euys/api-interfaces';
@Pipe({
  name: 'filterOlusturmaTarihi',
})
export class FilterOlusturmaTarihiPipe implements PipeTransform {
  transform(
    value: UtKusurluIstifPaketModel[],
    olusturmaTarihi: Date[],
    islemTarihi: Date[]
  ): UtKusurluIstifPaketModel[] {
    if (olusturmaTarihi != null) {
      if (olusturmaTarihi.filter(Boolean).length === 1) {
        // TODO : Seçilen güne ait verileri filtrele
        return [...value];
      } else {
        const bitisTarihi = new Date(olusturmaTarihi[1]);
        bitisTarihi.setHours(23, 59, 59, 999);

        return value.filter(
          (p: UtKusurluIstifPaketModel) =>
            p.olusturmaTarihiDate >= olusturmaTarihi[0] &&
            p.olusturmaTarihiDate <= bitisTarihi
        );
      }
    } else if (islemTarihi != null) {
      if (islemTarihi.filter(Boolean).length === 1) {
        // TODO : Seçilen güne ait verileri filtrele
        return [...value];
      } else {
        const bitisTarihi = new Date(islemTarihi[1]);
        bitisTarihi.setHours(23, 59, 59, 999);

        return value.filter(
          (p: UtKusurluIstifPaketModel) =>
            p.islemTarihiDate >= islemTarihi[0] &&
            p.islemTarihiDate <= bitisTarihi
        );
      }
    } else {
      if (value) return [...value];
    }
  }
}
