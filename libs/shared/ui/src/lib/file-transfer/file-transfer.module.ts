import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileTransferComponent } from './components/file-transfer.component';
import { HttpClientModule } from '@angular/common/http';
import { FileTransferService } from './services/file-transfer.service';
import { DesignSystemModule } from '../design-system/design-system.module';
import { SAVER, getSaver } from './services/file-saver.provider';

@NgModule({
  declarations: [FileTransferComponent],
  imports: [CommonModule, HttpClientModule, DesignSystemModule],
  providers: [FileTransferService, { provide: SAVER, useFactory: getSaver }],
  exports: [FileTransferComponent],
})
export class FileTransferModule {}
