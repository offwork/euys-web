import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as YillikUretimPlaniActions from './yillik-uretim-plani.actions';
import { YillikUretimPlaniEffects } from './yillik-uretim-plani.effects';

describe('YillikUretimPlaniEffects', () => {
  let actions: Observable<Action>;
  let effects: YillikUretimPlaniEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        YillikUretimPlaniEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(YillikUretimPlaniEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: YillikUretimPlaniActions.init() });

      const expected = hot('-a-|', {
        a: YillikUretimPlaniActions.loadYillikUretimPlaniSuccess({
          yillikUretimPlani: [],
        }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
