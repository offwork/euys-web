import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { Kt1217Service } from './kt-1217.service';

describe('Kt1217Service', () => {
  let spectator: SpectatorService<Kt1217Service>;
  const createService = createServiceFactory(Kt1217Service);

  beforeEach(() => spectator = createService());

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});
