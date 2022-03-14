import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as AylikUretimPlaniActions from './aylik-uretim-plani.actions';
import { AylikUretimPlaniEffects } from './aylik-uretim-plani.effects';

describe('AylikUretimPlaniEffects', () => {
  let actions: Observable<Action>;
  let effects: AylikUretimPlaniEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        AylikUretimPlaniEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(AylikUretimPlaniEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: AylikUretimPlaniActions.init() });

      const expected = hot('-a-|', {
        a: AylikUretimPlaniActions.loadAylikUretimPlaniSuccess({
          aylikUretimPlani: [],
        }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
