import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KusurKoduKatalogComponent } from './components/kusur-kodu-katalog/kusur-kodu-katalog.component';
import { SharedUiModule } from '@euys/shared/ui';
import { GridListComponent } from './components/grid-list/grid-list.component';
import { KusurKatalogFormComponent } from './components/kusur-katalog-form/kusur-katalog-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MuhOperatorYorumComponent } from './components/muh-operator-yorum/muh-operator-yorum.component';

@NgModule({
  declarations: [
    KusurKoduKatalogComponent,
    GridListComponent,
    KusurKatalogFormComponent,
    MuhOperatorYorumComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SharedUiModule],
  exports: [
    KusurKoduKatalogComponent,
    GridListComponent,
    MuhOperatorYorumComponent,
  ],
})
export class AnaVeriSharedModule {}
