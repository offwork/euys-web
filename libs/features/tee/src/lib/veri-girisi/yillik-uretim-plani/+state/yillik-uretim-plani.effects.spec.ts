import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { YillikUretimPlaniEffects } from './yillik-uretim-plani.effects';
import * as YillikUretimPlaniActions from './yillik-uretim-plani.actions';

describe('YillikUretimPlaniEffects', () => {
  let actions: Observable<any>;
  let effects: YillikUretimPlaniEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [YillikUretimPlaniEffects, DataPersistence, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(YillikUretimPlaniEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: YillikUretimPlaniActions.init() });

      const expected = hot('-a-|', {
        a: YillikUretimPlaniActions.loadYillikUretimPlaniSuccess({ yillikUretimPlani: {} }),
      });

      expect(effects.load$).toBeObservable(expected);
    });
  });
});
