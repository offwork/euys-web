import { Injectable } from '@angular/core';
import { ResponseModel } from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Hedef } from '../+state/hedefler.models';

@Injectable()
export class HedeflerService {
  constructor(private http: HttpProviderService) {}

  getHedefler(yil: number): Observable<ResponseModel<Hedef[]>> {
    return this.http.request('GET', `/veri-girisi/hedefler?yil=${yil}`).pipe(map((response) => response.body));
  }

  createHedefler(hedefler: Hedef[]) {
    return this.http.request('POST', `/veri-girisi/hedefler`, hedefler).pipe(map((response) => response));
  }

  updateHedefler(hedefler: Hedef[], yil: number) {
    return this.http.request('PUT', `/veri-girisi/hedefler/${yil}`, hedefler).pipe(map((response) => response));
  }
}
