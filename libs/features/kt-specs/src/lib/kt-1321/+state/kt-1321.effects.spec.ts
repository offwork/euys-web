import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1321Actions from './kt-1321.actions';
import { Kt1321Effects } from './kt-1321.effects';

describe('Kt1321Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1321Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        Kt1321Effects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(Kt1321Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1321Actions.init() });

      const expected = hot('-a-|', {
        a: Kt1321Actions.loadKt1321Success({ kt1320: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
