import { Injectable } from '@angular/core';
import { HttpProviderService } from '@euys/core';
import { Observable, of as observableOf } from 'rxjs';
import { delay, map } from 'rxjs/operators';
// TODO: MOCKING
import DUMMY_DATA from '../ana-veri/interfaces/dummy-data';

@Injectable()
export class KaliteKontrolGorselService {
  private readonly _gorsel_root = '/gorseller';
  private readonly _org_img_path = 'original-image';

  constructor(private http: HttpProviderService) {}

  getOriginalImage(genelDokumanId: string): Observable<string> {
    /* return observableOf(DUMMY_DATA).pipe(
      delay(1000),
      map((data, index) => {
        if (data.images[index]['idDokuman'] === genelDokumanId) {
          return data.images[index]['orijinalBase64'];
        }
      })
    ); */
    return this.http
      .request(
        'GET',
        `${this._gorsel_root}/${genelDokumanId}/${this._org_img_path}`,
        undefined,
        {
          responseType: 'text',
        }
      )
      .pipe(map(response => response.body));
  }
}
