import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AppConfiguration } from '../schemas/application.schemas';

export enum STATUS {
  INIT = 'INIT',
  LOADING = 'LOADING',
  LOADED = 'LOADED',
}

@Injectable({ providedIn: 'root' })
export class AppConfigService {
  get config() {
    return this._config;
  }

  _config!: AppConfiguration;
  _status = STATUS.INIT;
  readonly _onLoadSubject = new Subject<AppConfiguration>();
  onLoad = this._onLoadSubject.asObservable();

  constructor(private http: HttpClient) {}

  loader = () =>
    new Promise<AppConfiguration>((resolve, reject) => {
      const configUrl = `app.config.json?v=${Date.now()}`;
      if (this._status === STATUS.INIT) {
        this._status = STATUS.LOADING;
        this.http.get<AppConfiguration>(configUrl).subscribe(
          (data: AppConfiguration) => {
            this._status = STATUS.LOADED;
            this._config = Object.assign({}, this.config, data || {});
            this._onLoadSubject.next(this._config);
            resolve(this._config);
          },
          (error) => {
            reject(error);
          },
          () => {
            resolve(this._config);
          }
        );
      } else if (this._status === STATUS.LOADED) {
        resolve(this._config);
      } else if (this._status === STATUS.LOADING) {
        this.onLoad.subscribe(() => {
          resolve(this._config);
        });
      }
    });
}
