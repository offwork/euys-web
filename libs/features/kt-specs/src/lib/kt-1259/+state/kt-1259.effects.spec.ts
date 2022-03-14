import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1259Actions from './kt-1259.actions';
import { Kt1259Effects } from './kt-1259.effects';

describe('Kt1259Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1259Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        Kt1259Effects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(Kt1259Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1259Actions.init() });

      const expected = hot('-a-|', {
        a: Kt1259Actions.loadKt1259Success({ kt1259: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
