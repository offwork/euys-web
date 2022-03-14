import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { SogukAylikGecikmeAnaliziEffects } from './soguk-aylik-gecikme-analizi.effects';
import * as SogukAylikGecikmeAnaliziActions from './soguk-aylik-gecikme-analizi.actions';

describe('SogukAylikGecikmeAnaliziEffects', () => {
  let actions: Observable<any>;
  let effects: SogukAylikGecikmeAnaliziEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        SogukAylikGecikmeAnaliziEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(SogukAylikGecikmeAnaliziEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: SogukAylikGecikmeAnaliziActions.init() });

      const expected = hot('-a-|', {
        a: SogukAylikGecikmeAnaliziActions.loadSogukAylikGecikmeAnaliziSuccess({ sogukAylikGecikmeAnalizi: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
