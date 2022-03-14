import { Injectable } from '@angular/core';
import { Observable, of, throwError, timer } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { GenislikCol, GenislikKaliteKalinik, genislikKaliteKalinikData, ImalatLotTonaj } from '../models';

@Injectable()
export class KaliteService {

  constructor() { }

  findAll(query: 'kalite' | 'kalinlik'): Observable<GenislikKaliteKalinik[]> {
    return timer(500).pipe(
      switchMap(() => of(
        genislikKaliteKalinikData.filter(row => !!row[query])
      ))
    );
  }

  findMlnDataByKalinlik(kalinlik: number, genislik: GenislikCol): Observable<ImalatLotTonaj[]> {
    const row = genislikKaliteKalinikData.find(data => data.kalinlik && data.kalinlik === kalinlik);
    if(!row) {
      return throwError('Not Found!');
    }
    if(row[genislik]) {
      const remains = row[genislik] - 5;
      return timer(300).pipe(
        map(() => [
          {
            mln: '0314005560123456789012',
            tonaj: 5
          },
          {
            mln: '03140015721123456789012',
            tonaj: remains
          }
        ])
      );
    } else return of([]);
  }

  findMlnDataByKalite(kalite: string, genislik: GenislikCol): Observable<ImalatLotTonaj[]> {
    const row = genislikKaliteKalinikData.find(data => data.kalite && data.kalite === kalite);
    if(!row) {
      return throwError('Not Found!');
    }
    if(row[genislik]) {
      const remains = row[genislik] - 5;
      return timer(300).pipe(
        map(() => [
          {
            mln: '0314005560123456789012',
            tonaj: 5
          },
          {
            mln: '03140015721123456789012',
            tonaj: remains
          }
        ])
      );
    } else return of([]);
  }
}
