import { Component, Input, OnInit } from '@angular/core';

import { KtOICelikKalitesi } from '@euys/api-interfaces';
import { PickListService } from '../pick-list/pick-list.service';

@Component({
  selector: 'euys-kaliteler-pick-list',
  templateUrl: './kaliteler-pick-list.component.html',
  styleUrls: ['./kaliteler-pick-list.component.scss'],
})
export class KalitelerPickListComponent implements OnInit {
  @Input() kaliteler: KtOICelikKalitesi[];
  @Input() kalitelerLoaded = false;
  kalitelerTarget: KtOICelikKalitesi[];

  ngOnInit() {
    this.kalitelerTarget = [];
  }

  constructor(private pickListService: PickListService) {}

  getTargetList() {
    return this.kalitelerTarget;
  }
}
