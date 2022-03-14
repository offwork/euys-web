import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { InputNumberModule } from 'primeng/inputnumber';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { QCKayitComponent } from './container/qc-kayit.component';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { ToolbarModule } from 'primeng/toolbar';

const routes: Routes = [{ path: '', component: QCKayitComponent }];

@NgModule({
  declarations: [QCKayitComponent],
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    InputNumberModule,
    ButtonModule,
    InputTextModule,
    CardModule,
    DropdownModule,
    ToolbarModule,
    RouterModule.forChild(routes),
  ],
})
export class QCKayitModule {}
