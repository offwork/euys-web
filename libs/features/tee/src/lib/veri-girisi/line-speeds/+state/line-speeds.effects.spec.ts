import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { LineSpeedsEffects } from './line-speeds.effects';
import * as LineSpeedsActions from './line-speeds.actions';

describe('LineSpeedsEffects', () => {
  let actions: Observable<any>;
  let effects: LineSpeedsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [LineSpeedsEffects, DataPersistence, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(LineSpeedsEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: LineSpeedsActions.init() });

      const expected = hot('-a-|', { a: LineSpeedsActions.loadLineSpeedsSuccess({ lineSpeeds: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
