import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Up3244Actions from './up-3244.actions';
import { Up3244Effects } from './up-3244.effects';

describe('Up3244Effects', () => {
  let actions: Observable<Action>;
  let effects: Up3244Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        Up3244Effects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(Up3244Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Up3244Actions.init() });

      const expected = hot('-a-|', {
        a: Up3244Actions.loadUp3244Success({ up3244: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
