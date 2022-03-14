import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Ut5105Actions from './ut-5105.actions';
import { Ut5105Effects } from './ut-5105.effects';

describe('Ut5105Effects', () => {
  let actions: Observable<Action>;
  let effects: Ut5105Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        Ut5105Effects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(Ut5105Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Ut5105Actions.init() });

      const expected = hot('-a-|', {
        a: Ut5105Actions.loadUt5105Success({ ut5105: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
