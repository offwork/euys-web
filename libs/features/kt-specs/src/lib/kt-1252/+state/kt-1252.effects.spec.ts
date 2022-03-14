import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1252Actions from './kt-1252.actions';
import { Kt1252Effects } from './kt-1252.effects';

describe('Kt1252Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1252Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [Kt1252Effects, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(Kt1252Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1252Actions.init() });

      const expected = hot('-a-|', { a: Kt1252Actions.loadKt1252Success({ kt1252: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
