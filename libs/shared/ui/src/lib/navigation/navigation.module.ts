import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { ChildNavsListDirective } from './components/sidenav/components/vertical-navs/child-navs-list.directive';
import { ClickOutDirective } from './components/sidenav/click-out.directive';
import { CommonModule } from '@angular/common';
import { DesignSystemModule } from '../design-system/design-system.module';
import { FormsModule } from '@angular/forms';
import { HighlighterPipe } from './components/sidenav/components/vertical-navs/highlighter.pipe';
import { InputFocusDirective } from './components/sidenav/components/navs-search/input-focus.directive';
import { NavsSearchComponent } from './components/sidenav/components/navs-search/navs-search.component';
import { NavsSearchDirective } from './components/sidenav/components/navs-search/navs-search.directive';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Searchable } from './components/sidenav/components/vertical-navs/searchable.pipe';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToggleButtonComponent } from './components/sidenav/components/toggle-button/toggle-button.component';
import { VerticalNavsComponent } from './components/sidenav/components/vertical-navs/vertical-navs.component';
import { VerticalNavsContainerComponent } from './components/sidenav/components/vertical-navs-container/vertical-navs-container.component';
import { VerticalNavsService } from './components/sidenav/components/vertical-navs/vertical-navs.service';

@NgModule({
  declarations: [
    BreadcrumbsComponent,
    ChildNavsListDirective,
    ClickOutDirective,
    HighlighterPipe,
    InputFocusDirective,
    NavsSearchComponent,
    NavsSearchDirective,
    Searchable,
    SidenavComponent,
    ToggleButtonComponent,
    VerticalNavsComponent,
    VerticalNavsContainerComponent,
  ],
  exports: [
    BreadcrumbsComponent,
    NavsSearchComponent,
    NavsSearchDirective,
    SidenavComponent,
    ToggleButtonComponent,
    VerticalNavsComponent,
    VerticalNavsContainerComponent,
  ],
  imports: [CommonModule, RouterModule, DesignSystemModule, FormsModule],
  providers: [VerticalNavsService],
})
export class NavigationModule {}
