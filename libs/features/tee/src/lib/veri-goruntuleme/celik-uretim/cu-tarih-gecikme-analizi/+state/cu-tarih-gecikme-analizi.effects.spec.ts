import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { CuTarihGecikmeAnaliziEffects } from './cu-tarih-gecikme-analizi.effects';
import * as CuTarihGecikmeAnaliziActions from './cu-tarih-gecikme-analizi.actions';

describe('CuTarihGecikmeAnaliziEffects', () => {
  let actions: Observable<any>;
  let effects: CuTarihGecikmeAnaliziEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [CuTarihGecikmeAnaliziEffects, DataPersistence, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(CuTarihGecikmeAnaliziEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: CuTarihGecikmeAnaliziActions.init() });

      const expected = hot('-a-|', {
        a: CuTarihGecikmeAnaliziActions.loadCuTarihGecikmeAnaliziSuccess({ cuTarihGecikmeAnalizi: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
