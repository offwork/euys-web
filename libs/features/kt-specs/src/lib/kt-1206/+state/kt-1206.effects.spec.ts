import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1206Actions from './kt-1206.actions';
import { Kt1206Effects } from './kt-1206.effects';

describe('Kt1206Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1206Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [Kt1206Effects, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(Kt1206Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1206Actions.init() });

      const expected = hot('-a-|', { a: Kt1206Actions.loadKt1206Success({ kt1206: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
