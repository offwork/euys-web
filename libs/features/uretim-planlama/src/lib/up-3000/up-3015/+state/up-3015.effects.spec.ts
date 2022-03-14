import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Up3015Actions from './up-3015.actions';
import { Up3015Effects } from './up-3015.effects';

describe('Up3015Effects', () => {
  let actions: Observable<Action>;
  let effects: Up3015Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        Up3015Effects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(Up3015Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Up3015Actions.init() });

      const expected = hot('-a-|', {
        a: Up3015Actions.loadUp3015Success({ up3015: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
