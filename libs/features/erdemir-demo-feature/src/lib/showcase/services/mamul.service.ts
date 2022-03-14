import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { data, Mamul } from '../models';

@Injectable()
export class MamulService {

  constructor() { }

  autoComplete(mamulRumuzu: string): Observable<Mamul[]> {
    return timer(300).pipe(
      map(() => {
        return data.filter(
          ({mamulAdi}) => mamulAdi.startsWith(mamulRumuzu.toLocaleUpperCase('tr-TR'))
        );
      })
    );
  }
}
