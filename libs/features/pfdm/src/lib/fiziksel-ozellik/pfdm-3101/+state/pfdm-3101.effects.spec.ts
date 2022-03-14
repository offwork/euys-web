import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Pfdm3101Actions from './pfdm-3101.actions';
import { Pfdm3101Effects } from './pfdm-3101.effects';

describe('Pfdm3101Effects', () => {
  let actions: Observable<Action>;
  let effects: Pfdm3101Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        Pfdm3101Effects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(Pfdm3101Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Pfdm3101Actions.init() });

      const expected = hot('-a-|', {
        a: Pfdm3101Actions.loadPfdm3101Success({ pfdm3101: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
