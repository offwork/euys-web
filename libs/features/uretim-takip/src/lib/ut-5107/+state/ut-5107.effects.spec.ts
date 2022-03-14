import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Ut5107Actions from './ut-5107.actions';
import { Ut5107Effects } from './ut-5107.effects';

describe('Ut5107Effects', () => {
  let actions: Observable<Action>;
  let effects: Ut5107Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        Ut5107Effects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(Ut5107Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Ut5107Actions.init() });

      const expected = hot('-a-|', {
        a: Ut5107Actions.loadUt5107Success({ ut5107: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
