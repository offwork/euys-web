import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { FileTransferComponent } from './file-transfer.component';

describe('FileTransferComponent', () => {
  let spectator: Spectator<FileTransferComponent>;
  const createComponent = createComponentFactory(FileTransferComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
