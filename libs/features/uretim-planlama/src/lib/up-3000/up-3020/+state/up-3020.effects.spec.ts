import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Up3020Actions from './up-3020.actions';
import { Up3020Effects } from './up-3020.effects';

describe('Up3020Effects', () => {
  let actions: Observable<Action>;
  let effects: Up3020Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        Up3020Effects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(Up3020Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Up3020Actions.init() });

      const expected = hot('-a-|', {
        a: Up3020Actions.loadUp3020Success({
          Up3020: [],
        }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
