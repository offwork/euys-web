import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedUiModule } from '@euys/shared/ui';
import { FullLayoutComponent } from './components/full-layout/full-layout.component';

@NgModule({
  imports: [CommonModule, RouterModule, SharedUiModule],
  declarations: [FullLayoutComponent],
  exports: [FullLayoutComponent],
})
export class AppShellModule {}
