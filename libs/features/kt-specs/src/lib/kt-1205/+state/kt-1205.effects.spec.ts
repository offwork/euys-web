import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1205Actions from './kt-1205.actions';
import { Kt1205Effects } from './kt-1205.effects';

describe('Kt1205Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1205Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [Kt1205Effects, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(Kt1205Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1205Actions.init() });

      const expected = hot('-a-|', { a: Kt1205Actions.loadKt1205Success({ kt1205: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
