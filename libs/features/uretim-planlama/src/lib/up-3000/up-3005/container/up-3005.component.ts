import { Component, OnInit } from '@angular/core';
import { YupTaslakAnaModel } from '@euys/api-interfaces';
import { Up3005Facade } from '../+state/up-3005.facade';

@Component({
  selector: 'euys-up3005',
  templateUrl: './up-3005.component.html',
})
export class Up3005Component implements OnInit {
  listVisible = true;
  yupTaslak: YupTaslakAnaModel = null;
  loading$ = this.facade.loading$;
  data$ = this.facade.data$;

  constructor(private facade: Up3005Facade) {}

  ngOnInit(): void {
    this.facade.load();
  }

  showList() {
    this.yupTaslak = null;
    this.listVisible = true;
  }

  showDetail(yupTaslak: YupTaslakAnaModel) {
    this.yupTaslak = yupTaslak;
    this.listVisible = false;
  }
}
