import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Pfdm3103Actions from './pfdm-3103.actions';
import { Pfdm3103Effects } from './pfdm-3103.effects';

describe('Pfdm3103Effects', () => {
  let actions: Observable<Action>;
  let effects: Pfdm3103Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        Pfdm3103Effects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(Pfdm3103Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Pfdm3103Actions.init() });

      const expected = hot('-a-|', {
        a: Pfdm3103Actions.loadPfdm3103Success({ pfdm3103: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
