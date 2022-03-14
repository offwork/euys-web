import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1207Actions from './kt-1207.actions';
import { Kt1207Effects } from './kt-1207.effects';

describe('Kt1207Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1207Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [Kt1207Effects, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(Kt1207Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1207Actions.init() });

      const expected = hot('-a-|', { a: Kt1207Actions.loadKt1207Success({ kt1207: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
