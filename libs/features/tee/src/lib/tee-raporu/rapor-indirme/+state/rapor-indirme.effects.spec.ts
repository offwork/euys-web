import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { RaporIndirmeEffects } from './rapor-indirme.effects';
import * as RaporIndirmeActions from './rapor-indirme.actions';

describe('RaporIndirmeEffects', () => {
  let actions: Observable<any>;
  let effects: RaporIndirmeEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [RaporIndirmeEffects, DataPersistence, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(RaporIndirmeEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: RaporIndirmeActions.init() });

      const expected = hot('-a-|', { a: RaporIndirmeActions.loadRaporIndirmeSuccess({ raporIndirme: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
