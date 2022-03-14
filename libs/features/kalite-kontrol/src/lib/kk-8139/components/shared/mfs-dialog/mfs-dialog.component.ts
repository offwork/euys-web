import { Component } from '@angular/core';


@Component({
  selector: 'euys-mfs-dialog',
  templateUrl: './mfs-dialog.component.html',
})
export class MfsDialogComponent {
  bobinNo = '41030054000';
  url = 'https://apigwtest.erdemir.com.tr/int/dev/es3had-jr-api/es3had-jr/jrexporter?__report=ES3HM1Rapor/HM1_COIL_MFS_GRAFIK&parameter_bobinNo='+this.bobinNo;
}
