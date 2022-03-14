import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { SicakTarihGecikmeAnaliziEffects } from './sicak-tarih-gecikme-analizi.effects';
import * as SicakTarihGecikmeAnaliziActions from './sicak-tarih-gecikme-analizi.actions';

describe('SicakTarihGecikmeAnaliziEffects', () => {
  let actions: Observable<any>;
  let effects: SicakTarihGecikmeAnaliziEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        SicakTarihGecikmeAnaliziEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(SicakTarihGecikmeAnaliziEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: SicakTarihGecikmeAnaliziActions.init() });

      const expected = hot('-a-|', {
        a: SicakTarihGecikmeAnaliziActions.loadSicakTarihGecikmeAnaliziSuccess({ sicakTarihGecikmeAnalizi: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
