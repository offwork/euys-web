import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Ut6113Actions from './ut-6113.actions';
import { Ut6113Effects } from './ut-6113.effects';

describe('Ut6113Effects', () => {
  let actions: Observable<Action>;
  let effects: Ut6113Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        Ut6113Effects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(Ut6113Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Ut6113Actions.init() });

      const expected = hot('-a-|', {
        a: Ut6113Actions.loadUt6113Success({ ut6113: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
