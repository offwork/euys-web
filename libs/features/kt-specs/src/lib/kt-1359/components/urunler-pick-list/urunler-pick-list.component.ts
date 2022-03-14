import { Component, Input, OnInit } from '@angular/core';

import { KtOIUrun } from '@euys/api-interfaces';
import { PickListService } from '../pick-list/pick-list.service';

@Component({
  selector: 'euys-urunler-pick-list',
  templateUrl: './urunler-pick-list.component.html',
  styleUrls: ['./urunler-pick-list.component.scss'],
})
export class UrunlerPickListComponent implements OnInit {
  @Input() urunler: KtOIUrun[];
  @Input() urunlerLoaded = false;
  urunlerTarget: KtOIUrun[];

  constructor(private pickListService: PickListService) {}

  ngOnInit() {
    this.urunlerTarget = [];
  }

  getTargetList() {
    return this.urunlerTarget;
  }
}
