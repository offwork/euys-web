import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Up3003Actions from './up-3003.actions';
import { Up3003Effects } from './up-3003.effects';
import { Up3003Facade } from './up-3003.facade';
import { Up3003Entity } from './up-3003.models';
import {
  UP_3003_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './up-3003.reducer';
import * as Up3003Selectors from './up-3003.selectors';

interface TestSchema {
  up3003: State;
}

describe('Up3003Facade', () => {
  let facade: Up3003Facade;
  let store: Store<TestSchema>;
  const createUp3003Entity = (id: string, name = ''): Up3003Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(UP_3003_FEATURE_KEY, reducer),
          EffectsModule.forFeature([Up3003Effects]),
        ],
        providers: [Up3003Facade],
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
      facade = TestBed.inject(Up3003Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allUp3003$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allUp3003$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadUp3003Success` to manually update list
     */
    it('allUp3003$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allUp3003$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Up3003Actions.loadUp3003Success({
          up3003: [createUp3003Entity('AAA'), createUp3003Entity('BBB')],
        })
      );

      list = await readFirst(facade.allUp3003$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
