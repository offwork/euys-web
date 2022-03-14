import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Ut5104Actions from './ut-5104.actions';
import { Ut5104Effects } from './ut-5104.effects';

describe('Ut5104Effects', () => {
  let actions: Observable<Action>;
  let effects: Ut5104Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        Ut5104Effects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(Ut5104Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Ut5104Actions.init() });

      const expected = hot('-a-|', {
        a: Ut5104Actions.loadUt5104Success({ ut5104: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
