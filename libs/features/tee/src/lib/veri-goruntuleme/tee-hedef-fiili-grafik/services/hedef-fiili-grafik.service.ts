import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Line } from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class HedefFiiliGrafikService {
  constructor(private http: HttpProviderService) {}

  getHedefFiiliGrafik(yil: number, hatKodu: string) {
    return this.http.request(
      'GET',
      '/goruntulemeler/hedef-fiili-analizler',
      null,
      {
        params: new HttpParams({
          fromObject: { yil: `${yil}`, hatKodu: `${hatKodu}` },
        }),
      }
    );
  }

  getAllProductLines(): Observable<Line[]> {
    return this.http
      .request('GET', '/hatlar')
      .pipe(map(response => response.body['data']));
  }
}
