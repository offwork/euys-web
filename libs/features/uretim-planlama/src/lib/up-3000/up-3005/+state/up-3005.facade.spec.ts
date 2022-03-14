import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Up3005Actions from './up-3005.actions';
import { Up3005Effects } from './up-3005.effects';
import { Up3005Facade } from './up-3005.facade';
import { Up3005Entity } from './up-3005.models';
import {
  UP_3005_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './up-3005.reducer';
import * as Up3005Selectors from './up-3005.selectors';

interface TestSchema {
  up3005: State;
}

describe('Up3005Facade', () => {
  let facade: Up3005Facade;
  let store: Store<TestSchema>;
  const createUp3005Entity = (id: string, name = ''): Up3005Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(UP_3005_FEATURE_KEY, reducer),
          EffectsModule.forFeature([Up3005Effects]),
        ],
        providers: [Up3005Facade],
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
      facade = TestBed.inject(Up3005Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allUp3005$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allUp3005$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadUp3005Success` to manually update list
     */
    it('allUp3005$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allUp3005$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Up3005Actions.loadUp3005Success({
          up3005: [createUp3005Entity('AAA'), createUp3005Entity('BBB')],
        })
      );

      list = await readFirst(facade.allUp3005$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
