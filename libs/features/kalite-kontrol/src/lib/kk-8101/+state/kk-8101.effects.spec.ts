import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kk8101Actions from './kk-8101.actions';
import { Kk8101Effects } from './kk-8101.effects';

describe('Kk8101Effects', () => {
  let actions: Observable<Action>;
  let effects: Kk8101Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        Kk8101Effects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(Kk8101Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kk8101Actions.init() });

      const expected = hot('-a-|', {
        a: Kk8101Actions.loadKk8101Success({ kk8101: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
