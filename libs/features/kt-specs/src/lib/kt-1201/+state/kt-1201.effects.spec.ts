import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1201Actions from './kt-1201.actions';
import { Kt1201Effects } from './kt-1201.effects';

describe('Kt1201Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1201Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [Kt1201Effects, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(Kt1201Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1201Actions.init() });

      const expected = hot('-a-|', { a: Kt1201Actions.loadKt1201Success({ kt1201: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
