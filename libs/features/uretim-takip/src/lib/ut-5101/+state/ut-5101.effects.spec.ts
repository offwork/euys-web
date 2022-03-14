import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Ut5101Actions from './ut-5101.actions';
import { Ut5101Effects } from './ut-5101.effects';

describe('Ut5101Effects', () => {
  let actions: Observable<Action>;
  let effects: Ut5101Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        Ut5101Effects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(Ut5101Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Ut5101Actions.init() });

      const expected = hot('-a-|', {
        a: Ut5101Actions.loadUt5101Success({ Ut5101: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
