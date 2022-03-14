import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { SicakAylikGecikmeAnaliziEffects } from './sicak-aylik-gecikme-analizi.effects';
import * as SicakAylikGecikmeAnaliziActions from './sicak-aylik-gecikme-analizi.actions';

describe('SicakAylikGecikmeAnaliziEffects', () => {
  let actions: Observable<any>;
  let effects: SicakAylikGecikmeAnaliziEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        SicakAylikGecikmeAnaliziEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(SicakAylikGecikmeAnaliziEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: SicakAylikGecikmeAnaliziActions.init() });

      const expected = hot('-a-|', {
        a: SicakAylikGecikmeAnaliziActions.loadSicakAylikGecikmeAnaliziSuccess({ sicakAylikGecikmeAnalizi: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
