import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Up3004Actions from './up-3004.actions';
import { Up3004Effects } from './up-3004.effects';
import { Up3004Facade } from './up-3004.facade';
import { Up3004Entity } from './up-3004.models';
import {
  UP_3004_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './up-3004.reducer';
import * as Up3004Selectors from './up-3004.selectors';

interface TestSchema {
  up3004: State;
}

describe('Up3004Facade', () => {
  let facade: Up3004Facade;
  let store: Store<TestSchema>;
  const createUp3004Entity = (id: string, name = ''): Up3004Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(UP_3004_FEATURE_KEY, reducer),
          EffectsModule.forFeature([Up3004Effects]),
        ],
        providers: [Up3004Facade],
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
      facade = TestBed.inject(Up3004Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allUp3004$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allUp3004$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadUp3004Success` to manually update list
     */
    it('allUp3004$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allUp3004$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Up3004Actions.loadUp3004Success({
          up3004: [createUp3004Entity('AAA'), createUp3004Entity('BBB')],
        })
      );

      list = await readFirst(facade.allUp3004$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
