import { NgModule } from '@angular/core';
// ANGULAR–CDK MODULES
import { A11yModule } from '@angular/cdk/a11y';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';

// PRIME–NG MODULES
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { BlockUIModule } from 'primeng/blockui';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipModule } from 'primeng/chip';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KeyFilterModule } from 'primeng/keyfilter';
import { ListboxModule } from 'primeng/listbox';
import { MenuModule } from 'primeng/menu';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PanelModule } from 'primeng/panel';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PickListModule } from 'primeng/picklist';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RippleModule } from 'primeng/ripple';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SelectButtonModule } from 'primeng/selectbutton';
import { StepsModule } from 'primeng/steps';
import { SkeletonModule } from 'primeng/skeleton';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { MultiSelectModule } from 'primeng/multiselect';

const CDK_MODULES = [
  A11yModule,
  CdkStepperModule,
  CdkTableModule,
  CdkTreeModule,
  DragDropModule,
  PortalModule,
  ScrollingModule,
];

const PRIME_MODULES = [
  BlockUIModule,
  BreadcrumbModule,
  ButtonModule,
  CalendarModule,
  CardModule,
  CarouselModule,
  CheckboxModule,
  CheckboxModule,
  ChipModule,
  ConfirmDialogModule,
  ConfirmDialogModule,
  ConfirmPopupModule,
  DialogModule,
  DividerModule,
  DropdownModule,
  FileUploadModule,
  InputNumberModule,
  InputTextModule,
  InputTextareaModule,
  KeyFilterModule,
  ListboxModule,
  MenuModule,
  MessageModule,
  MessagesModule,
  MultiSelectModule,
  OverlayPanelModule,
  PanelMenuModule,
  PanelModule,
  StepsModule,
  PickListModule,
  ProgressSpinnerModule,
  RadioButtonModule,
  RippleModule,
  ScrollPanelModule,
  SelectButtonModule,
  SkeletonModule,
  TabViewModule,
  TableModule,
  TagModule,
  TieredMenuModule,
  ToastModule,
  ToolbarModule,
  TooltipModule,
  VirtualScrollerModule,
];

@NgModule({
  exports: [...PRIME_MODULES, ...CDK_MODULES],
})
export class DesignSystemModule {}
