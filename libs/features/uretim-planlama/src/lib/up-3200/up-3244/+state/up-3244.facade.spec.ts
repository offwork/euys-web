import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Up3244Actions from './up-3244.actions';
import { Up3244Effects } from './up-3244.effects';
import { Up3244Facade } from './up-3244.facade';
import { Up3244Entity } from './up-3244.models';
import {
  UP_3244_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './up-3244.reducer';
import * as Up3244Selectors from './up-3244.selectors';

interface TestSchema {
  up3244: State;
}

describe('Up3244Facade', () => {
  let facade: Up3244Facade;
  let store: Store<TestSchema>;
  const createUp3244Entity = (id: string, name = ''): Up3244Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(UP_3244_FEATURE_KEY, reducer),
          EffectsModule.forFeature([Up3244Effects]),
        ],
        providers: [Up3244Facade],
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
      facade = TestBed.inject(Up3244Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allUp3244$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allUp3244$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadUp3244Success` to manually update list
     */
    it('allUp3244$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allUp3244$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Up3244Actions.loadUp3244Success({
          up3244: [createUp3244Entity('AAA'), createUp3244Entity('BBB')],
        })
      );

      list = await readFirst(facade.allUp3244$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
