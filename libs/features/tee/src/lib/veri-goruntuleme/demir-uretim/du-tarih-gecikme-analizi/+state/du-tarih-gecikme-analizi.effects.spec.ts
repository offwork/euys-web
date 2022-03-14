import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { DuTarihGecikmeAnaliziEffects } from './du-tarih-gecikme-analizi.effects';
import * as DuTarihGecikmeAnaliziActions from './du-tarih-gecikme-analizi.actions';

describe('DuTarihGecikmeAnaliziEffects', () => {
  let actions: Observable<any>;
  let effects: DuTarihGecikmeAnaliziEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [DuTarihGecikmeAnaliziEffects, DataPersistence, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(DuTarihGecikmeAnaliziEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: DuTarihGecikmeAnaliziActions.init() });

      const expected = hot('-a-|', {
        a: DuTarihGecikmeAnaliziActions.loadDuTarihGecikmeAnaliziSuccess({ duTarihGecikmeAnalizi: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
