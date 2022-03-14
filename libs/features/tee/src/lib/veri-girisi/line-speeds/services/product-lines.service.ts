import { Injectable } from '@angular/core';
import { HttpProviderService } from '@euys/core';
import { Line } from '@euys/api-interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ProductLinesService {
  constructor(private http: HttpProviderService) {}

  getAllProductLines(): Observable<Line[]> {
    return this.http
      .request('GET', '/hatlar')
      .pipe(map(response => response.body['data']));
  }
}
