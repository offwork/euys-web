/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AppDataResourcesService } from './app-data-resources.service';
import { LocalStorageService } from './local-storage.service';
import { SessionStorageService } from './session-storage.service';

@Injectable({ providedIn: 'root' })
export class AppAuthService {
  localInfo = {
    uygList: [
      {
        uygulamaKod: '4962d53c-3d90-41af-8db3-b21242c33a84',
        uygulamaAd: 'TOPLAM EKİPMAN ETKİNLİĞİ',
        clientId: 'dea920b8-8e7e-4811-8d15-c747bd8590cd',
        token: {
          token_type: 'Bearer',
          access_token:
            'AAIkZGVhOTIwYjgtOGU3ZS00ODExLThkMTUtYzc0N2JkODU5MGNk0beA42Pr9lKLjHjXoxXE-GMuTHzJLWoqJovg2CfG2RFk3_xpFZukIqs3NR-ldU8SlMZUxD_nrv3KFHVPAuCwiNcQF1PwjYQfu8jArBCmtyRSs8K2wB0YguSkY79TkUUAxQCwjVmt8FRwTLmN9JI6v7SpmK05w5Hh5017fIzFdytSgaLlRYjpXeUGF9CO6bWiZjDqLARePPJGedKAAYR1q_Qv10wkMFpXiBQjZwQex8_Ukom_zJQ5Xo4RVBPftM7V',
          refresh_token:
            'AAI0yKp6ULffIMGUA0Iy-21CmRtvWNn1rGoNHMb3zbwB6octu-zTRaFefAAxAotCA61ei2JWJN8axGCnsUrr7AfFVK7asaHlQzSf9q9q-mXjUP7nVxEP_S1S99GwwOrphDrLidCUAh8QAqdCel-as6AaezJCMywGWIhNrOeZl6jpwNzNoa_sofuAE6gxKn0-R92aqNjP0gw7PdV3PYosUsebPy9PZH5ZBU8sqFzmoNo1uMKZA2dFSig0e04JpDcX-JVIQFiIPw_A5d2J1glLrKO2',
        },
      },
    ],
  };

  httpOptions = {
    headers: new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('x-ibm-gateway-decode-request-params', 'true')
      //.set('X-IBM-Client-Id', this.getLoginInfo().uygulamaInfo?.clientId)
      .set('SkipError', 'true'),
  };

  constructor(
    private http: HttpClient,
    private appDataResources: AppDataResourcesService,
    // TODO: localStorage may be unnecessary, please make sure line 50 is working
    private localStorage: LocalStorageService,
    private sessionStorage: SessionStorageService
  ) {}

  refreshToken(uygulamaKod: string) {
    const { loginInfo, uygulamaInfo } = this.getLoginInfo(uygulamaKod);
    console.log('loginInfo before refresh', loginInfo);

    // const url = this.localStorage.getItem('baseUrl') + '/erdemir-oauth/oauth2/token';
    const url = this.appDataResources.getDataSourceUrl() + '/erdemir-oauth/oauth2/token';
    let data = 'grant_type=refresh_token';
    data += '&client_id=' + uygulamaInfo.clientId;
    data += '&refresh_token=' + uygulamaInfo?.token?.refresh_token;

    return this.http.post(url, data, this.httpOptions).pipe(
      tap((data) => {
        uygulamaInfo.token = data;
        console.log('loginInfo after refresh', loginInfo);
        // TODO: please use by injecting SessionStorageService instead of sessionStorage
        this.sessionStorage.setItem('loginInfo', JSON.stringify(loginInfo));
      }),
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  // TODO: return `type` should be changed
  getLoginInfo(uygulamaKod: string): { loginInfo: any; uygulamaInfo: any } {
    const loginInfo = JSON.parse(this.sessionStorage.getItem('loginInfo') || JSON.stringify(this.localInfo));
    /* if (!loginInfo) {
      loginInfo = this.localInfo;
    } */
    const { uygList } = loginInfo;
    const uygulamaInfo = uygList?.find((i: any) => i.uygulamaKod === uygulamaKod);
    console.log('INFO: ', uygulamaInfo); // TODO: should be managed the console logs to avoid vulnerabilities
    return { loginInfo, uygulamaInfo };
  }
}
