import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { DuAylikGecikmeAnaliziEffects } from './du-aylik-gecikme-analizi.effects';
import * as DuAylikGecikmeAnaliziActions from './du-aylik-gecikme-analizi.actions';

describe('DuAylikGecikmeAnaliziEffects', () => {
  let actions: Observable<any>;
  let effects: DuAylikGecikmeAnaliziEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [DuAylikGecikmeAnaliziEffects, DataPersistence, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(DuAylikGecikmeAnaliziEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: DuAylikGecikmeAnaliziActions.init() });

      const expected = hot('-a-|', {
        a: DuAylikGecikmeAnaliziActions.loadDuAylikGecikmeAnaliziSuccess({ duAylikGecikmeAnalizi: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
