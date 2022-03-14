import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Ut6114Actions from './ut-6114.actions';
import { Ut6114Effects } from './ut-6114.effects';

describe('Ut6114Effects', () => {
  let actions: Observable<Action>;
  let effects: Ut6114Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        Ut6114Effects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(Ut6114Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Ut6114Actions.init() });

      const expected = hot('-a-|', {
        a: Ut6114Actions.loadUt6114Success({ ut6114: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
