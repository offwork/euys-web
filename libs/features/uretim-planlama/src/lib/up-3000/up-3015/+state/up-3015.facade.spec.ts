import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Up3015Actions from './up-3015.actions';
import { Up3015Effects } from './up-3015.effects';
import { Up3015Facade } from './up-3015.facade';
import { Up3015Entity } from './up-3015.models';
import {
  UP_3015_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './up-3015.reducer';
import * as Up3015Selectors from './up-3015.selectors';

interface TestSchema {
  up3015: State;
}

describe('Up3015Facade', () => {
  let facade: Up3015Facade;
  let store: Store<TestSchema>;
  const createUp3015Entity = (id: string, name = ''): Up3015Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(UP_3015_FEATURE_KEY, reducer),
          EffectsModule.forFeature([Up3015Effects]),
        ],
        providers: [Up3015Facade],
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
      facade = TestBed.inject(Up3015Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allUp3015$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allUp3015$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadUp3015Success` to manually update list
     */
    it('allUp3015$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allUp3015$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Up3015Actions.loadUp3015Success({
          up3015: [createUp3015Entity('AAA'), createUp3015Entity('BBB')],
        })
      );

      list = await readFirst(facade.allUp3015$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
