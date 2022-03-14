import {
  Component,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  OnInit,
  OnChanges,
  OnDestroy,
  HostBinding,
} from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Router } from '@angular/router';
import { Navs } from '@euys/api-interfaces';
import { Subscription } from 'rxjs';
import { VerticalNavsService } from './vertical-navs.service';
import { SideNavProps } from '../../../../model/side-nav-props';

@Component({
  selector: 'euys-vertical-navs',
  templateUrl: './vertical-navs.component.html',
  styleUrls: ['./vertical-navs.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('passive', style({ transform: 'rotate(0deg)' })),
      state('active', style({ transform: 'rotate(180deg)' })),
      transition(
        'active <=> passive',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ]),
  ],
})
export class VerticalNavsComponent implements OnInit, OnChanges, OnDestroy {
  @Input() navs!: Navs;
  @Input() index: number;
  @Input() parentKey: string;
  @Input() root: boolean;
  @Input() collapsed: boolean;
  @Input() hidden: boolean;
  @Input() level: number;
  @Input() activeList = false;
  @Input() sideNavProps: SideNavProps;
  @Input() filterActive = false;
  @Input() filterValue: string;
  @Output() activeListHandler = new EventEmitter<boolean>();

  @HostBinding('class.root-menu-item') get isRootMenuItem() {
    return this.root && !this.parentKey;
  }
  @HostBinding('class.active-menu-item') get isActiveMenuItem() {
    return this.active;
  }
  @HostBinding('class.filter-active') get isFilterActive() {
    return this.filterActive;
  }
  @HostBinding('class.leaf-menu-item') get isLeafMenuItem() {
    return !this.root && this.leaf;
  }
  @HostBinding('class.menu-item__active-route') get isMenuItemActiveRoute() {
    if (this.sideNavProps) {
      const { activeRunModulIndexPathArr, activeRunModulIndexParentPathArr } =
        this.sideNavProps;
      return (
        activeRunModulIndexPathArr &&
        activeRunModulIndexParentPathArr.length > 0 &&
        activeRunModulIndexPathArr[this.level] === this.index &&
        activeRunModulIndexParentPathArr[this.level] === this.parentKey
      );
    }
  }

  active = false;
  key: string;
  leaf = false;
  filteredItemSelected = false;
  menuSourceSubscription: Subscription;
  menuResetSubscription: Subscription;

  constructor(
    private router: Router,
    private verticalNavsService: VerticalNavsService
  ) {
    this.menuSourceSubscription =
      this.verticalNavsService.menuSource$.subscribe(key => {
        if (this.active && this.key !== key && key.indexOf(this.key) !== 0) {
          this.active = false;
        }
      });
    this.menuResetSubscription =
      this.verticalNavsService.resetSource$.subscribe(() => {
        this.active = false;
      });
  }

  ngOnInit(): void {
    this.key = this.parentKey
      ? this.parentKey + '-' + this.index
      : String(this.index);
    this.leaf = !this.hasChild(this.navs);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.activeList && !changes.activeList.currentValue && this.active)
      this.active = false;
    else if (changes.filterActive && changes.filterActive.currentValue)
      this.active = changes.filterActive.currentValue && !this.collapsed;
  }

  hasChild = (node: Navs) => node.altModuller && node.altModuller.length > 0;

  onItemSelected(navs: Navs) {
    this.verticalNavsService.onMenuStateChange(this.key);
    this.filteredItemSelected = this.filterActive;

    if (this.hasChild(navs)) {
      this.active = !this.active;
      this.activeListHandler.emit(this.active);
    } else {
      this.active = true;
      this.navigateRoute(navs);
    }
  }

  navigateRoute(navs: Navs) {
    if (navs.altModuller === null) {
      this.router.navigate([navs.runModul.split('.').join('/')]);
    }
  }

  ngOnDestroy() {
    if (this.menuSourceSubscription) {
      this.menuSourceSubscription.unsubscribe();
    }

    if (this.menuResetSubscription) {
      this.menuResetSubscription.unsubscribe();
    }
  }
}
