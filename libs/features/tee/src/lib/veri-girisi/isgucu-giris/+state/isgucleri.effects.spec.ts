import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { IsgucleriEffects } from './isgucleri.effects';
import * as IsgucleriActions from './isgucleri.actions';

describe('IsgucleriEffects', () => {
  let actions: Observable<any>;
  let effects: IsgucleriEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [IsgucleriEffects, DataPersistence, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(IsgucleriEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: IsgucleriActions.init() });

      const expected = hot('-a-|', { a: IsgucleriActions.loadIsgucleriSuccess({ isgucleri: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
