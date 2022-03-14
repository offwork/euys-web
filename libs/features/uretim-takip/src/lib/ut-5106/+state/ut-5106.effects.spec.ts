import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Ut5106Actions from './ut-5106.actions';
import { Ut5106Effects } from './ut-5106.effects';

describe('Ut5106Effects', () => {
  let actions: Observable<Action>;
  let effects: Ut5106Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        Ut5106Effects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(Ut5106Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Ut5106Actions.init() });

      const expected = hot('-a-|', {
        a: Ut5106Actions.loadUt5106Success({ ut5106: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
