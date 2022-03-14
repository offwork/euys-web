import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { saveAs } from 'file-saver';
import { AppDataResourcesService } from '@euys/core';

@Injectable()
export class LineSppedsService {
  constructor(
    private http: HttpClient,
    private appDataResources: AppDataResourcesService
  ) {}

  uploadFilesList(data: File, line: string = 'CPT') {
    const formData = new FormData();
    formData.append('file', data);
    const apiUrl = this.appDataResources.getDataSourceUrl();
    return this.http.post(
      `${apiUrl}/hatlar/hizlar/uploads?hat=${line}`,
      formData
    );
  }

  // TODO: Hatlara ait her endpoint çalışmıyor!!!
  downloadFiles(line: string = 'CPT') {
    const apiUrl = this.appDataResources.getDataSourceUrl();
    return this.http
      .get(`${apiUrl}/hatlar/hizlar/downloads?hat=${line}`, {
        responseType: 'blob',
        reportProgress: true,
      })
      .pipe(map(res => saveAs(res, `${line}.xlsx`)));
  }
}
