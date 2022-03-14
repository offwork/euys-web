import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'euys-inputtext',
  templateUrl: './inputtext.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputtextComponent {
  @Input() text: string;
  @Input() filled: boolean;
  @Input() size: string;
  @Input() iconPos = 'Left';
}
