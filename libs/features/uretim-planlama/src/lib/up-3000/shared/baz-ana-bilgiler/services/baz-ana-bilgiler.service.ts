import { Injectable } from '@angular/core';
import { UpYupBazAna } from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class BazAnaBilgilerService {
  readonly _endpointBase = '/yup/yup-baz-ana-bilgiler';
  readonly _endpointList = `${this._endpointBase}/yup-baz-ana-bilgileri-list`;

  constructor(private http: HttpProviderService) {}

  get(): Observable<UpYupBazAna[]> {
    return this.http
      .request('GET', this._endpointList)
      .pipe(map(response => response.body));
  }
}
