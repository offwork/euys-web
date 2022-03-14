import { Component, OnInit } from '@angular/core';
import { Ut6114Facade } from '../+state/ut-6114.facade';

@Component({
  selector: 'euys-ut6114',
  templateUrl: './ut-6114.component.html',
})
export class Ut6114Component implements OnInit {
  data$ = this.facade.data$;
  listeler$ = this.facade.listeler$;

  constructor(private facade: Ut6114Facade) {}

  ngOnInit(): void {
    this.facade.init();
  }
}
