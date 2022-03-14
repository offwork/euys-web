import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Pfdm3104Actions from './pfdm-3104.actions';
import { Pfdm3104Effects } from './pfdm-3104.effects';

describe('Pfdm3104Effects', () => {
  let actions: Observable<Action>;
  let effects: Pfdm3104Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        Pfdm3104Effects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(Pfdm3104Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Pfdm3104Actions.init() });

      const expected = hot('-a-|', {
        a: Pfdm3104Actions.loadPfdm3104Success({ pfdm3104: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
