import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kk8104Actions from './kk-8104.actions';
import { Kk8104Effects } from './kk-8104.effects';

describe('Kk8104Effects', () => {
  let actions: Observable<Action>;
  let effects: Kk8104Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        Kk8104Effects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(Kk8104Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kk8104Actions.init() });

      const expected = hot('-a-|', {
        a: Kk8104Actions.loadKk8104Success({ kk8104: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
