import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClipboardModule } from '@angular/cdk/clipboard';

import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ButtonsShowcaseComponent } from './components/buttons-showcase/buttons-showcase.component';
import { DividerModule } from 'primeng/divider';
import { PanelModule } from 'primeng/panel';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { MultiSelectModule } from 'primeng/multiselect';
import { DialogModule } from 'primeng/dialog';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { TooltipModule } from 'primeng/tooltip';

import { SharedUiModule } from '@euys/shared/ui';
import { ShowcaseComponent } from './container/showcase.component';
import { InputsShowcaseComponent } from './components/inputs-showcase/inputs-showcase.component';
import { CalendarModule } from 'primeng/calendar';
import { MamulService } from './services/mamul.service';
import { TableShowcaseComponent } from './components/table-showcase/table-showcase.component';
import { CustomerService } from './services/customer.service';
import { DynamicColsComponent } from './components/table-showcase/dynamic-cols/dynamic-cols.component';
import { KaliteService } from './services/kalite.service';
import { CustomComponentsShowcaseComponent } from './components/custom-components-showcase/custom-components-showcase.component';

@NgModule({
  declarations: [
    ShowcaseComponent,
    ButtonsShowcaseComponent,
    InputsShowcaseComponent,
    TableShowcaseComponent,
    DynamicColsComponent,
    CustomComponentsShowcaseComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    DialogModule,
    SharedUiModule,
    ReactiveFormsModule,
    TabViewModule,
    PanelModule,
    DividerModule,
    TableModule,
    ButtonModule,
    SelectButtonModule,
    CheckboxModule,
    InputTextModule,
    InputMaskModule,
    CalendarModule,
    InputNumberModule,
    DropdownModule,
    AutoCompleteModule,
    MultiSelectModule,
    PanelModule,
    OverlayPanelModule,
    ClipboardModule,
    TooltipModule,
    RouterModule.forChild([{ path: '', component: ShowcaseComponent }]),
  ],
  providers: [MamulService, CustomerService, KaliteService],
})
export class ShowcaseModule {}
