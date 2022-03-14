/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  EventEmitter,
  Output,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { AppHeaderDirective } from '../../directives/app-header.directive';
import { AppNavsDirective } from '../../directives/app-navs.directive';
import { AppProfileDirective } from '../../directives/app-profile.directive';
import { FeatureContainerDirective } from '../../directives/feature-container.directive';
import { SidenavContainerComponent } from '../sidenav-container/sidenav-container.component';

export interface TemplateContext {
  toggleMenu: (value: boolean) => void;
  toggleProfile: (value: boolean) => void;
  expanded: boolean;
  expandedProfile: boolean;
}

@Component({
  selector: 'euys-app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppShellComponent implements AfterViewInit {
  @ContentChild(AppHeaderDirective) appHeaderDirective!: AppHeaderDirective;
  @ContentChild(AppNavsDirective) appNavsDirective!: AppNavsDirective;
  @ContentChild(AppProfileDirective) appProfileDirective!: AppProfileDirective;
  @ContentChild(FeatureContainerDirective)
  featureContainerDirective!: FeatureContainerDirective;

  @ViewChild(SidenavContainerComponent)
  sideNavContainer!: SidenavContainerComponent;
  @ViewChild('emptyTemplate', { static: true }) emptyTemplate: any;

  @Output() expanded = new EventEmitter<boolean>();

  expandedSinenav = false;
  expandedProfile = false;

  get appHeaderTemplate(): TemplateRef<any> {
    return (
      (this.appHeaderDirective && this.appHeaderDirective.template) ||
      this.emptyTemplate
    );
  }

  get appNavsTemplate(): TemplateRef<any> {
    return (
      (this.appNavsDirective && this.appNavsDirective.template) ||
      this.emptyTemplate
    );
  }

  get appProfileTemplate(): TemplateRef<any> {
    return (
      (this.appProfileDirective && this.appProfileDirective.template) ||
      this.emptyTemplate
    );
  }

  get featureContainerTemplate(): TemplateRef<any> {
    return (
      (this.featureContainerDirective &&
        this.featureContainerDirective.template) ||
      this.emptyTemplate
    );
  }

  templateContext: TemplateContext = {
    toggleMenu: () => ({}),
    toggleProfile: () => ({}),
    expanded: false,
    expandedProfile: false,
  };

  toggleMenu(value: boolean) {
    this.templateContext.expanded = value;
    this.expandedSinenav = value;
    this.expanded.emit(value);
  }

  toggleProfile() {
    // Must be used Boolean flag for changing state of profile side!!
    this.templateContext.expandedProfile = !this.expandedProfile;
    this.expandedProfile = !this.expandedProfile;
    this.sideNavContainer.toggleProfile();
  }

  ngAfterViewInit() {
    this.templateContext.toggleMenu = this.toggleMenu.bind(this);
    this.templateContext.toggleProfile = this.toggleProfile.bind(this);
  }
}
