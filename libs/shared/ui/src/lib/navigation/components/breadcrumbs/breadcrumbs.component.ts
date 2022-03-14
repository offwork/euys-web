import { APP_BASE_HREF } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Input,
} from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'euys-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsComponent {
  breadcrumbs!: MenuItem[];
  @Input() set urlSegments(urls: string) {
    this.breadcrumbs = urls
      .split('/')
      .filter(url => url.length > 0)
      .map(val => ({ label: val.toUpperCase() }));
  }

  readonly home: { icon: string; url: string };

  constructor(@Inject(APP_BASE_HREF) private appRoot: string) {
    this.home = {
      icon: 'pi pi-home',
      url: `${this.appRoot}`,
    };
  }
}
