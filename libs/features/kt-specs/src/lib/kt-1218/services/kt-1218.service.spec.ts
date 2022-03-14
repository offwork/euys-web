import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { Kt1218Service } from './kt-1218.service';

describe('Kt1218Service', () => {
  let spectator: SpectatorService<Kt1218Service>;
  const createService = createServiceFactory(Kt1218Service);

  beforeEach(() => spectator = createService());

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});