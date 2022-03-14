import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { Kt1203Service } from './kt-1203.service';

describe('Kt1203Service', () => {
  let spectator: SpectatorService<Kt1203Service>;
  const createService = createServiceFactory(Kt1203Service);

  beforeEach(() => spectator = createService());

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});