import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DesignSystemModule } from '../design-system/design-system.module';
import { MessagesModule } from '../messages/messages.module';
import { ColumnFilterComponent } from './components/column-filter.component';
import { SpesifikasyonTabloComponent } from './components/spesifikasyon-tablo.component';

@NgModule({
  declarations: [SpesifikasyonTabloComponent, ColumnFilterComponent],
  imports: [CommonModule, DesignSystemModule, FormsModule, MessagesModule],
  exports: [SpesifikasyonTabloComponent, ColumnFilterComponent],
})
export class SpesifikasyonTabloModule {}
