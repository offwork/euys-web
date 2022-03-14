import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1212Actions from './kt-1212.actions';
import { Kt1212Effects } from './kt-1212.effects';

describe('Kt1212Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1212Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [Kt1212Effects, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(Kt1212Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1212Actions.init() });

      const expected = hot('-a-|', { a: Kt1212Actions.loadKt1212Success({ kt1212: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
