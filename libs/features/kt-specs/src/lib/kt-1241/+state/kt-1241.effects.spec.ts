import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1241Actions from './kt-1241.actions';
import { Kt1241Effects } from './kt-1241.effects';

describe('Kt1241Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1241Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [Kt1241Effects, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(Kt1241Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1241Actions.init() });

      const expected = hot('-a-|', { a: Kt1241Actions.loadKt1241Success({ kt1241: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
