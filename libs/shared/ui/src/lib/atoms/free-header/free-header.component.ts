import { Component, Input } from '@angular/core';

@Component({
  selector: 'euys-free-header',
  templateUrl: './free-header.component.html',
  styleUrls: ['./free-header.component.scss'],
})
export class FreeHeaderComponent {
  @Input() textToRender = 'You need to write text to render';
  @Input() textAlign = 'left';

  @Input() marginDense = true;
  @Input() marginNormal = false;
}
