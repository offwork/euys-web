import { Injectable } from '@angular/core';
import { UpHatVerim } from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class Up3201Service {
  constructor(private http: HttpProviderService) {}

  getHatVerimList(): Observable<UpHatVerim[]> {
    return this.http.request('GET', '/ili/ili-hat-genel-verim/get').pipe(
      map(response => {
        return response.body;
      })
    );
  }

  saveHatVerim(upHatVerim: UpHatVerim): Observable<UpHatVerim> {
    return this.http
      .request('POST', '/ili/ili-hat-genel-verim/save', upHatVerim)
      .pipe(
        map(response => {
          return response.body;
        })
      );
  }
}
