import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { FileTransferService } from './file-transfer.service';

describe('FileTransferService', () => {
  let spectator: SpectatorService<FileTransferService>;
  const createService = createServiceFactory(FileTransferService);

  beforeEach(() => spectator = createService());

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});