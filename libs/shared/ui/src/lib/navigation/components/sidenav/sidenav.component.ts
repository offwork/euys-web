/* eslint-disable @angular-eslint/no-host-metadata-property */
import {
  Component,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
  OnInit,
} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { of } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Navs } from '@euys/api-interfaces';
import { SideNavProps } from '../../model/side-nav-props';

@Component({
  selector: 'euys-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'sidenav-wrapper',
    '[class.collapsed]': '!expandedSidenav',
  },
})
export class SidenavComponent implements AfterViewInit, OnInit {
  @Input() navs!: Navs[];
  @Output() toggleSidenav = new EventEmitter<boolean>();

  sideNavProps: SideNavProps;

  expandedSidenav = false;
  activeList = false;
  navsFiltered: Navs[];
  filterActive = false;
  filterValue: string;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.navigateRouteHandler();
      });
  }

  ngOnInit(): void {
    this.navsFiltered = [...this.navs];
  }

  ngAfterViewInit() {
    this.navigateRouteHandler();
  }

  getSideNavProps(runModul?: string): SideNavProps {
    const activeRunModul = !runModul ? this.getActiveRunModul() : runModul;
    const activeRunModulIndexPath = this.getActiveRunModulIndexPath(
      activeRunModul,
      this.navsFiltered
    );
    const activeRunModulIndexPathArr = this.getActiveRunModulIndexPathArr(
      activeRunModulIndexPath
    );
    const sideNavProps: SideNavProps = {
      activeRunModul,
      activeRunModulIndexPath,
      activeRunModulIndexParentPathArr:
        this.getActiveRunModulIndexParentPathArr(activeRunModulIndexPathArr),
      activeRunModulIndexPathArr,
    };
    return sideNavProps;
  }

  getActiveRunModulIndexPath(activeRunModul: string, arr: Navs[]): string {
    return arr.reduce((a: string, item: Navs, index) => {
      if (a) {
        return a;
      }
      if (item.runModul === activeRunModul) {
        return index.toString();
      }
      if (item.altModuller) {
        const ret = this.getActiveRunModulIndexPath(
          activeRunModul,
          item.altModuller
        );
        if (ret && ret !== '') return index + '-' + ret;
      }
    }, null);
  }

  getActiveRunModulIndexPathArr(activeRunModulIndexPath: string) {
    if (activeRunModulIndexPath)
      return activeRunModulIndexPath
        .split('-')
        .map(runModulIndex => parseInt(runModulIndex));

    return [];
  }

  getActiveRunModulIndexParentPathArr(activeRunModulIndexPathArr: number[]) {
    return activeRunModulIndexPathArr.map((item, index) => {
      let parent = '';
      if (index === 0) return null;
      for (let i = 0; i < index; i++) {
        parent =
          parent + activeRunModulIndexPathArr[i] + (i + 1 === index ? '' : '-');
      }
      return parent;
    });
  }

  getActiveRunModul() {
    return this.router.url
      .slice(1, this.router.url.length)
      .split('/')
      .join('.');
  }

  activeListHandler(active: boolean) {
    this.activeList = active;
  }

  navigateRouteHandler(runModul?: string) {
    this.sideNavProps = { ...this.getSideNavProps(runModul) };
    if (!this.expandedSidenav) {
      this.activeList = false;
      this.filterActive = false;
    }
  }

  toggleSidenavHandler() {
    this.expandedSidenav = !this.expandedSidenav;
    this.activeList = this.expandedSidenav;
    this.filterActive = false;
    this.filterValue = '';
    this.navsFiltered = [...this.navs];
    this.toggleSidenav.emit(this.expandedSidenav);
  }

  filterNavs(navs: Navs[], criteria: ({ modulAd: string }: Navs) => boolean) {
    return navs.reduce((acc, a) => {
      const ch = this.filterNavs(a.altModuller || [], criteria);
      if (criteria(a) || ch.length) {
        acc.push(Object.assign({}, a, ch.length && { altModuller: ch }));
      }
      return acc;
    }, []);
  }

  navsFilterHandler(filterValue: string) {
    this.filterActive = filterValue ? true : false;
    const criteria = ({ modulAd, runModul }: Navs): boolean =>
      modulAd
        .concat(runModul)
        .toLocaleLowerCase('tr')
        .includes(filterValue.toLocaleLowerCase('tr'));
    this.navsFiltered = this.filterNavs(this.navs, criteria);
    this.activateFilterHighlighter(filterValue);
  }

  activateFilterHighlighter(filterValue: string) {
    of(filterValue).subscribe(val => (this.filterValue = val));
  }

  clickOut() {
    this.activeList = !this.activeList;
  }
}
