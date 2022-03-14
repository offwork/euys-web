import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputtextComponent } from './inputtext.component';

@NgModule({
  declarations: [InputtextComponent],
  imports: [CommonModule, FormsModule, InputTextModule],
  exports: [InputtextComponent],
})
export class EuysInputtextModule {}
