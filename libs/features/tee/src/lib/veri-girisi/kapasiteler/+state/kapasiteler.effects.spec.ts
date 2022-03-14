import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { KapasitelerEffects } from './kapasiteler.effects';
import * as KapasitelerActions from './kapasiteler.actions';

describe('KapasitelerEffects', () => {
  let actions: Observable<any>;
  let effects: KapasitelerEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [KapasitelerEffects, DataPersistence, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(KapasitelerEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: KapasitelerActions.init() });

      const expected = hot('-a-|', { a: KapasitelerActions.loadKapasitelerSuccess({ kapasiteler: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
