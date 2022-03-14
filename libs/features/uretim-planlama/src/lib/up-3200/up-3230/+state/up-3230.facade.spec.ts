import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Up3230Actions from './up-3230.actions';
import { Up3230Effects } from './up-3230.effects';
import { Up3230Facade } from './up-3230.facade';
import { Up3230Entity } from './up-3230.models';
import {
  UP_3230_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './up-3230.reducer';
import * as Up3230Selectors from './up-3230.selectors';

interface TestSchema {
  up3230: State;
}

describe('Up3230Facade', () => {
  let facade: Up3230Facade;
  let store: Store<TestSchema>;
  const createUp3230Entity = (id: string, name = ''): Up3230Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(UP_3230_FEATURE_KEY, reducer),
          EffectsModule.forFeature([Up3230Effects]),
        ],
        providers: [Up3230Facade],
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
      facade = TestBed.inject(Up3230Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allUp3230$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allUp3230$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadUp3230Success` to manually update list
     */
    it('allUp3230$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allUp3230$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Up3230Actions.loadUp3230Success({
          up3230: [createUp3230Entity('AAA'), createUp3230Entity('BBB')],
        })
      );

      list = await readFirst(facade.allUp3230$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
