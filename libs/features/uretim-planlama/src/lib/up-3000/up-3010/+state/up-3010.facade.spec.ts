import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Up3010Actions from './up-3010.actions';
import { Up3010Effects } from './up-3010.effects';
import { Up3010Facade } from './up-3010.facade';
import { Up3010Entity } from './up-3010.models';
import {
  UP_3010_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './up-3010.reducer';
import * as Up3010Selectors from './up-3010.selectors';

interface TestSchema {
  up3010: State;
}

describe('Up3010Facade', () => {
  let facade: Up3010Facade;
  let store: Store<TestSchema>;
  const createUp3010Entity = (id: string, name = ''): Up3010Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(UP_3010_FEATURE_KEY, reducer),
          EffectsModule.forFeature([Up3010Effects]),
        ],
        providers: [Up3010Facade],
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
      facade = TestBed.inject(Up3010Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allUp3010$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allUp3010$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadUp3010Success` to manually update list
     */
    it('allUp3010$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allUp3010$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Up3010Actions.loadUp3010Success({
          up3010: [createUp3010Entity('AAA'), createUp3010Entity('BBB')],
        })
      );

      list = await readFirst(facade.allUp3010$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
