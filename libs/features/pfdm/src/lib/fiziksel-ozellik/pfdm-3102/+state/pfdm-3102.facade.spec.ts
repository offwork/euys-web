import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Pfdm3102Actions from './pfdm-3102.actions';
import { Pfdm3102Effects } from './pfdm-3102.effects';
import { Pfdm3102Facade } from './pfdm-3102.facade';
import { Pfdm3102Entity } from './pfdm-3102.models';
import {
  PFDM_3102_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './pfdm-3102.reducer';
import * as Pfdm3102Selectors from './pfdm-3102.selectors';

interface TestSchema {
  pfdm3102: State;
}

describe('Pfdm3102Facade', () => {
  let facade: Pfdm3102Facade;
  let store: Store<TestSchema>;
  const createPfdm3102Entity = (id: string, name = ''): Pfdm3102Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(PFDM_3102_FEATURE_KEY, reducer),
          EffectsModule.forFeature([Pfdm3102Effects]),
        ],
        providers: [Pfdm3102Facade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(Pfdm3102Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allPfdm3102$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allPfdm3102$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadPfdm3102Success` to manually update list
     */
    it('allPfdm3102$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allPfdm3102$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Pfdm3102Actions.loadPfdm3102Success({
          pfdm3102: [createPfdm3102Entity('AAA'), createPfdm3102Entity('BBB')],
        })
      );

      list = await readFirst(facade.allPfdm3102$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
