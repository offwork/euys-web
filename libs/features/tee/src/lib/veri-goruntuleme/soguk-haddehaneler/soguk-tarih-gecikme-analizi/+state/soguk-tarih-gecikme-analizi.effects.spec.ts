import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { SogukTarihGecikmeAnaliziEffects } from './soguk-tarih-gecikme-analizi.effects';
import * as SogukTarihGecikmeAnaliziActions from './soguk-tarih-gecikme-analizi.actions';

describe('SogukTarihGecikmeAnaliziEffects', () => {
  let actions: Observable<any>;
  let effects: SogukTarihGecikmeAnaliziEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        SogukTarihGecikmeAnaliziEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(SogukTarihGecikmeAnaliziEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: SogukTarihGecikmeAnaliziActions.init() });

      const expected = hot('-a-|', {
        a: SogukTarihGecikmeAnaliziActions.loadSogukTarihGecikmeAnaliziSuccess({ sogukTarihGecikmeAnalizi: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
