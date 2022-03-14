import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1244Actions from './kt-1244.actions';
import { Kt1244Effects } from './kt-1244.effects';

describe('Kt1244Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1244Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [Kt1244Effects, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(Kt1244Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1244Actions.init() });

      const expected = hot('-a-|', { a: Kt1244Actions.loadKt1244Success({ kt1244: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
