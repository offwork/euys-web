import { Component, Input, OnInit } from '@angular/core';
import { Celik } from '@euys/api-interfaces';

@Component({
  selector: 'euys-kaliteler-pick-list',
  templateUrl: './kaliteler-pick-list.component.html',
  styleUrls: ['./kaliteler-pick-list.component.scss'],
})
export class KalitelerPickListComponent implements OnInit {
  @Input() kaliteler: Celik[];
  @Input() kalitelerLoaded = false;
  @Input() celiklerGelen: Celik[];
  @Input() dirty = false;
  kalitelerTarget: Celik[];

  ngOnInit() {
    this.kalitelerTarget = [];
    if (this.celiklerGelen) {
      this.celiklerGelen.forEach(celik => {
        this.kalitelerTarget.push(celik);
      });
    }
  }

  getTargetList() {
    return this.kalitelerTarget.map(celik => celik.erdGrupKalitesi).sort();
  }
}
