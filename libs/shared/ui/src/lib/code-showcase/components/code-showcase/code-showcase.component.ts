import { Component, Input } from '@angular/core';
import { CodeFragment } from '../../models/code-fragment.model';

@Component({
  selector: 'euys-code-showcase',
  templateUrl: './code-showcase.component.html',
  styleUrls: ['./code-showcase.component.scss'],
})
export class CodeShowcaseComponent {
  @Input() fragments: CodeFragment[] = [];
  activeIndex = 0;
}
