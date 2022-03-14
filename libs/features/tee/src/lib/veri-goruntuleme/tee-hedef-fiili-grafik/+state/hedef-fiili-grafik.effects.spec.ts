import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { HedefFiiliGrafikEffects } from './hedef-fiili-grafik.effects';
import * as HedefFiiliGrafikActions from './hedef-fiili-grafik.actions';

describe('HedefFiiliGrafikEffects', () => {
  let actions: Observable<any>;
  let effects: HedefFiiliGrafikEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [HedefFiiliGrafikEffects, DataPersistence, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(HedefFiiliGrafikEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: HedefFiiliGrafikActions.init() });

      const expected = hot('-a-|', {
        a: HedefFiiliGrafikActions.loadHedefFiiliGrafikSuccess({ hedefFiiliGrafik: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
