import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Up3021Actions from './up-3021.actions';
import { Up3021Effects } from './up-3021.effects';

describe('Up3021Effects', () => {
  let actions: Observable<Action>;
  let effects: Up3021Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        Up3021Effects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(Up3021Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Up3021Actions.init() });

      const expected = hot('-a-|', {
        a: Up3021Actions.loadUp3021Success(
          { Up3021: [] }
        ),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
