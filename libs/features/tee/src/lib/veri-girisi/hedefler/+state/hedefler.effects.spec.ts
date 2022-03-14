import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { HedeflerEffects } from './hedefler.effects';
import * as HedeflerActions from './hedefler.actions';

describe('HedeflerEffects', () => {
  let actions: Observable<any>;
  let effects: HedeflerEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [HedeflerEffects, DataPersistence, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(HedeflerEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: HedeflerActions.init() });

      const expected = hot('-a-|', { a: HedeflerActions.loadHedeflerSuccess({ hedefler: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
