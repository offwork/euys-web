import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { SAVER, Saver } from './file-saver.provider';
import { download, Download } from '../impl/download';
import { Observable } from 'rxjs';

/**
 * Creates an instance of file transfer service.
 * @param httpClient
 *
 * @description
 * Lütfen Dikkat!
 *
 * Aşağıda yapılan `http` istekleri sahte `API` tarafından test etmek için gerçekleştirilir.
 */
@Injectable()
export class FileTransferService {
  constructor(
    private httpClient: HttpClient,
    @Inject(SAVER) private save: Saver
  ) {}

  downloadFile(name: string, url: string): Observable<Download> {
    // test-url : '/api/v1/file-server/download'
    return this.httpClient
      .get(`${url}/${name}`, {
        responseType: 'blob',
        reportProgress: true,
        observe: 'events',
      })
      .pipe(download(blob => this.save(blob, name)));
  }

  getAllFiles(url: string) {
    // test-url : '/api/v1/file-server/filelist'
    return (
      this.httpClient
        .get(url)
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        .pipe(map(res => res['data']))
    );
  }

  async uploadFile(data: FormData, url: string) {
    // test-url : '/api/v1/file-server/upload'
    return await this.httpClient
      .post(url, data, {
        responseType: 'blob',
        reportProgress: true,
        observe: 'events',
      })
      .toPromise();
  }
}
