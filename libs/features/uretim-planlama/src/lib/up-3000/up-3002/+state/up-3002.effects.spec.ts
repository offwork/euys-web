import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Up3002Actions from './up-3002.actions';
import { Up3002Effects } from './up-3002.effects';

describe('Up3002Effects', () => {
  let actions: Observable<Action>;
  let effects: Up3002Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        Up3002Effects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(Up3002Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Up3002Actions.init() });

      const expected = hot('-a-|', {
        a: Up3002Actions.loadUp3002Success(
          { Up3002: [] }
        ),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
