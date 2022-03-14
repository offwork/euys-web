import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { CuAylikGecikmeAnaliziEffects } from './cu-aylik-gecikme-analizi.effects';
import * as CuAylikGecikmeAnaliziActions from './cu-aylik-gecikme-analizi.actions';

describe('CuAylikGecikmeAnaliziEffects', () => {
  let actions: Observable<any>;
  let effects: CuAylikGecikmeAnaliziEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [CuAylikGecikmeAnaliziEffects, DataPersistence, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(CuAylikGecikmeAnaliziEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: CuAylikGecikmeAnaliziActions.init() });

      const expected = hot('-a-|', {
        a: CuAylikGecikmeAnaliziActions.loadCuAylikGecikmeAnaliziSuccess({ cuAylikGecikmeAnalizi: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
