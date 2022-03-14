import { Component, OnInit } from '@angular/core';

import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'euys-urun-kodu-dialog',
  templateUrl: './urun-kodu-dialog.component.html',
})
export class UrunKoduDialogComponent implements OnInit {
  formConfiguration: DynamicDialogConfig;
  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {}

  ngOnInit(): void {
    this.formConfiguration = this.config;
  }
}
