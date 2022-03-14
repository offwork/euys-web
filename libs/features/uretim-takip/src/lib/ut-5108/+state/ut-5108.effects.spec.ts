import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Ut5108Actions from './ut-5108.actions';
import { Ut5108Effects } from './ut-5108.effects';

describe('Ut5108Effects', () => {
  let actions: Observable<Action>;
  let effects: Ut5108Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        Ut5108Effects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(Ut5108Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Ut5108Actions.init() });

      const expected = hot('-a-|', {
        a: Ut5108Actions.loadUt5108Success({ ut5108: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
