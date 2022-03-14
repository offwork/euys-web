import { Component, Input, OnInit } from '@angular/core';
import { Urun } from '@euys/api-interfaces';

@Component({
  selector: 'euys-urunler-pick-list',
  templateUrl: './urunler-pick-list.component.html',
})
export class UrunlerPickListComponent implements OnInit {
  @Input() urunler: Urun[];
  @Input() urunlerLoaded = false;
  @Input() urunlerGelen: Urun[];
  @Input() dirty = false;
  urunlerTarget: Urun[];

  ngOnInit(): void {
    this.urunlerTarget = [];
    if (this.urunlerGelen != null) {
      this.urunlerGelen.forEach(urun => {
        this.urunlerTarget.push(urun);
      });
    }
  }

  getTargetList() {
    return this.urunlerTarget.sort((a, b) =>
      a.urunKodu.localeCompare(b.urunKodu)
    );
  }
}
