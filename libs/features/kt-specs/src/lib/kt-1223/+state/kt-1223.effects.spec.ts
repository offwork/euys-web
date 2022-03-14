import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1223Actions from './kt-1223.actions';
import { Kt1223Effects } from './kt-1223.effects';

describe('Kt1223Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1223Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [Kt1223Effects, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(Kt1223Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1223Actions.init() });

      const expected = hot('-a-|', { a: Kt1223Actions.loadKt1223Success({ kt1223: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
