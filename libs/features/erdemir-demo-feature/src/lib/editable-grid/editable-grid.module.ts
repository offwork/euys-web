import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { InputNumberModule } from 'primeng/inputnumber';
import { TableModule } from 'primeng/table';
import { EditableGridComponent } from './container/editable-grid.component';

const routes: Routes = [{ path: '', component: EditableGridComponent }];

@NgModule({
  declarations: [EditableGridComponent],
  imports: [CommonModule, FormsModule, TableModule, InputNumberModule, RouterModule.forChild(routes)],
})
export class EditableGridModule {}
