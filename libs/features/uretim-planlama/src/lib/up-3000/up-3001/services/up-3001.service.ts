import { Injectable } from '@angular/core';
import { YupBazAnaBilgileri } from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { map } from 'rxjs/operators';

@Injectable()
export class Up3001Service {
  readonly _endpointSave = '/yup/yup-baz-ana-bilgiler/yup-baz-detay-kaydet';
  readonly _endpointUpdate = '/yup/yup-baz-ana-bilgiler/yup-baz-detay-guncelle';

  constructor(private http: HttpProviderService) {}

  save(yupBazAnaBilgileri: YupBazAnaBilgileri, file: File) {
    const formData = new FormData();
    formData.append('upload', file);
    formData.append('dosyaAdi', yupBazAnaBilgileri.dosyaAdi);
    formData.append('idYupbazAna', yupBazAnaBilgileri.id);
    formData.append('dosyaAciklama', yupBazAnaBilgileri.dosyaAciklama);
    formData.append('yil', yupBazAnaBilgileri.yil);

    const method = yupBazAnaBilgileri.id ? 'PUT' : 'POST';
    const endpoint = yupBazAnaBilgileri.id
      ? this._endpointUpdate
      : this._endpointSave;

    return this.http
      .request(method, endpoint, formData)
      .pipe(map(response => response.body));
  }
}
