import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'euys-feature-container',
  templateUrl: './feature-container.component.html',
  styleUrls: ['./feature-container.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureContainerComponent {
  @Input() isLoaded!: Observable<boolean> | boolean;
}
