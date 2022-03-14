import { Component, Input } from '@angular/core';
@Component({
  selector: 'euys-block-ui',
  templateUrl: './block-ui.component.html',
  styleUrls: ['./block-ui.component.scss'],
})
export class BlockUiComponent {
  @Input() target: any = undefined;
  @Input() isBlocked: boolean;
}
