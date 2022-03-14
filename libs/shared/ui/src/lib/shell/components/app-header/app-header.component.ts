import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'euys-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppHeaderComponent implements OnInit {
  @Input() logo!: string;
  @Input() title!: string;
  @Input() color!: string;
  @Input() tooltip!: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() redirectUrl: string | any[] = '/';
  @Input() hideSidenavMenu = true;
  @Output() menuClicked = new EventEmitter<boolean>();

  _expanded = false;

  toggleMenu() {
    this._expanded = !this._expanded;
    this.menuClicked.emit(this._expanded);
  }

  ngOnInit() {
    if (!this.logo) {
      this.logo = './assets/logo/oyak-logo.png';
    }
  }
}
