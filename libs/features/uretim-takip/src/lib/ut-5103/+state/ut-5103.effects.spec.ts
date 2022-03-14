import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Ut5103Actions from './ut-5103.actions';
import { Ut5103Effects } from './ut-5103.effects';

describe('Ut5103Effects', () => {
  let actions: Observable<Action>;
  let effects: Ut5103Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        Ut5103Effects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(Ut5103Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Ut5103Actions.init() });

      const expected = hot('-a-|', {
        a: Ut5103Actions.loadUt5103Success({ ut5103: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
