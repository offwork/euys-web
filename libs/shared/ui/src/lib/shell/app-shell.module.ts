import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DesignSystemModule } from '../design-system/design-system.module';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppShellComponent } from './components/app-shell/app-shell.component';
import { FeatureContainerComponent } from './components/feature-container/feature-container.component';
import { SidenavContainerComponent } from './components/sidenav-container/sidenav-container.component';
import { AppHeaderDirective } from './directives/app-header.directive';
import { FeatureContainerDirective } from './directives/feature-container.directive';
import { AppNavsDirective } from './directives/app-navs.directive';
import { AutoCloseSidenavDirective } from './directives/auto-close-sidenav.directive';
import { AppProfileDirective } from './directives/app-profile.directive';

@NgModule({
  declarations: [
    AppHeaderComponent,
    AppShellComponent,
    FeatureContainerComponent,
    SidenavContainerComponent,
    AppHeaderDirective,
    FeatureContainerDirective,
    AppNavsDirective,
    AutoCloseSidenavDirective,
    AppProfileDirective,
  ],
  exports: [
    AppHeaderComponent,
    AppShellComponent,
    FeatureContainerComponent,
    SidenavContainerComponent,
    AppHeaderDirective,
    FeatureContainerDirective,
    AppNavsDirective,
    AutoCloseSidenavDirective,
    AppProfileDirective,
  ],
  imports: [CommonModule, DesignSystemModule],
})
export class AppShellModule {}
