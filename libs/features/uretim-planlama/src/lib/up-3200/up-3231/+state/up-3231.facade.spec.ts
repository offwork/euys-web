import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Up3231Actions from './up-3231.actions';
import { Up3231Effects } from './up-3231.effects';
import { Up3231Facade } from './up-3231.facade';
import { Up3231Entity } from './up-3231.models';
import {
  UP_3231_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './up-3231.reducer';
import * as Up3231Selectors from './up-3231.selectors';

interface TestSchema {
  up3231: State;
}

describe('Up3231Facade', () => {
  let facade: Up3231Facade;
  let store: Store<TestSchema>;
  const createUp3231Entity = (id: string, name = ''): Up3231Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(UP_3231_FEATURE_KEY, reducer),
          EffectsModule.forFeature([Up3231Effects]),
        ],
        providers: [Up3231Facade],
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
      facade = TestBed.inject(Up3231Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allUp3231$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allUp3231$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadUp3231Success` to manually update list
     */
    it('allUp3231$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allUp3231$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Up3231Actions.loadUp3231Success({
          up3231: [createUp3231Entity('AAA'), createUp3231Entity('BBB')],
        })
      );

      list = await readFirst(facade.allUp3231$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
