import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1224Actions from './kt-1224.actions';
import { Kt1224Effects } from './kt-1224.effects';

describe('Kt1224Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1224Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [Kt1224Effects, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(Kt1224Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1224Actions.init() });

      const expected = hot('-a-|', { a: Kt1224Actions.loadKt1224Success({ kt1224: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
