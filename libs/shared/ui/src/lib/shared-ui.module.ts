import { AppShellModule } from './shell/app-shell.module';
import { BlockUiModule } from './block-ui/block-ui.module';
import { ChartsModule } from './charts/charts.module';
import { CodeShowcaseModule } from './code-showcase/code-showcase.module';
import { ColumnActionButtonModule } from './column-action-button/column-action-button.module';
import { ConfirmClickModule } from './confirm-click/confirm-click.module';
import { CustomFormControlModule } from './custom-form-control/custom-form-control.module';
import { DataTableModule } from './data-table/data-table.module';
import { DesignSystemModule } from './design-system/design-system.module';
import { DigitOnlyModule } from './digit-only/digit-only.module';
import { DynamicFormModule } from './dynamic-form/dynamic-form.module';
import { ErrorMessageModule } from './error-message/error-message.module';
import { FileTransferModule } from './file-transfer/file-transfer.module';
import { EuysFormsModule } from './forms/forms.module';
import { ServicesModule } from './services/services.module';
import { FilterBarModule } from './filter-bar/filter-bar.module';
import { FormFieldInfoModule } from './form-field-info/form-field-info.module';
import { FreeHeaderModule } from './atoms/free-header/free-header.module';
import { ImagePreviewModule } from './image-preview/image-preview.module';
import { MessagesModule } from './messages/messages.module';
import { MinMaxFieldsetModule } from './min-max-fieldset/min-max-fieldset.module';
import { NavigationModule } from './navigation/navigation.module';
import { NgModule } from '@angular/core';
import { SimpleTableFilterModule } from './simple-table-filter/simple-table-filter.module';
import { SpesifikasyonTabloModule } from './spesifikasyon-tablo/spesifikasyon-tablo.module';
import { SpesifikasyonToolbarModule } from './spesifikasyon-toolbar/spesifikasyon-toolbar.module';
import { StyledPanelModule } from './molecules/styled-panel/styled-panel.module';
import { TableColumnExpanderModule } from './table-column-expander/table-column-expander.module';
import { TableMultiSelectModule } from './table-multi-select/table-multi-select.module';
import { IFrameModule } from './iframe/iframe.module';
import { PipesModule } from './pipes/pipes.module';
import { UserProfileModule } from './user-profile/user-profile.module';

@NgModule({
  /**
   * Lütfen Dikkat!!
   *
   * SharedUiModule yalnızca Angular Modullerini paylaştırmaktan sorumludur!
   *
   * Unit Test ya da Storybook gibi dokümantasyonlarda sürekli olarak mock
   * modüller yazmak zorunda kalınabilir. Ayrıca yeniden kullanılabilir
   * bir yapıda olması daha zor olacaktır.
   *
   * Pipe, Directive ya da Component gibi Angular öğlerinin kendilerine
   * bir modülü olmalı.
   */
  exports: [
    AppShellModule,
    BlockUiModule,
    ChartsModule,
    CodeShowcaseModule,
    ColumnActionButtonModule,
    ConfirmClickModule,
    CustomFormControlModule,
    DataTableModule,
    DesignSystemModule,
    DigitOnlyModule,
    DynamicFormModule,
    EuysFormsModule,
    ErrorMessageModule,
    EuysFormsModule, // <-- SILME DIKKAT ET LUTFEN...
    FileTransferModule,
    FilterBarModule,
    FormFieldInfoModule,
    FreeHeaderModule,
    ImagePreviewModule,
    MessagesModule,
    MinMaxFieldsetModule,
    NavigationModule,
    PipesModule,
    ServicesModule,
    StyledPanelModule,
    SimpleTableFilterModule,
    SpesifikasyonTabloModule,
    SpesifikasyonToolbarModule,
    StyledPanelModule,
    TableColumnExpanderModule,
    TableMultiSelectModule,
    IFrameModule,
    UserProfileModule,
  ],
})
export class SharedUiModule {}
