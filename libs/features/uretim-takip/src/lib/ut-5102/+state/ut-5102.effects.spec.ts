import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Ut5102Actions from './ut-5102.actions';
import { Ut5102Effects } from './ut-5102.effects';

describe('Ut5102Effects', () => {
  let actions: Observable<Action>;
  let effects: Ut5102Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        Ut5102Effects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(Ut5102Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Ut5102Actions.init() });

      const expected = hot('-a-|', {
        a: Ut5102Actions.loadUt5102Success({ ut5102: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
