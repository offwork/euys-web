import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Pfdm3103Actions from './pfdm-3103.actions';
import { Pfdm3103Effects } from './pfdm-3103.effects';
import { Pfdm3103Facade } from './pfdm-3103.facade';
import { Pfdm3103Entity } from './pfdm-3103.models';
import {
  PFDM_3103_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './pfdm-3103.reducer';
import * as Pfdm3103Selectors from './pfdm-3103.selectors';

interface TestSchema {
  pfdm3103: State;
}

describe('Pfdm3103Facade', () => {
  let facade: Pfdm3103Facade;
  let store: Store<TestSchema>;
  const createPfdm3103Entity = (id: string, name = ''): Pfdm3103Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(PFDM_3103_FEATURE_KEY, reducer),
          EffectsModule.forFeature([Pfdm3103Effects]),
        ],
        providers: [Pfdm3103Facade],
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
      facade = TestBed.inject(Pfdm3103Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allPfdm3103$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allPfdm3103$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadPfdm3103Success` to manually update list
     */
    it('allPfdm3103$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allPfdm3103$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Pfdm3103Actions.loadPfdm3103Success({
          pfdm3103: [createPfdm3103Entity('AAA'), createPfdm3103Entity('BBB')],
        })
      );

      list = await readFirst(facade.allPfdm3103$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
