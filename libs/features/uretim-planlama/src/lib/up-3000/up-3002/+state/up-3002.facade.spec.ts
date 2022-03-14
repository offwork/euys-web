import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Up3002Actions from './up-3002.actions';
import { Up3002Effects } from './up-3002.effects';
import { Up3002Facade } from './up-3002.facade';
import { Up3002Entity } from './up-3002.models';
import {
  UP_3002_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './up-3002.reducer';
import * as Up3002Selectors from './up-3002.selectors';

interface TestSchema {
  Up3002: State;
}

describe('Up3002Facade', () => {
  let facade: Up3002Facade;
  let store: Store<TestSchema>;
  const createUp3002Entity = (
    id: string,
    name = ''
  ): Up3002Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(
            UP_3002_FEATURE_KEY,
            reducer
          ),
          EffectsModule.forFeature([Up3002Effects]),
        ],
        providers: [Up3002Facade],
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
      facade = TestBed.inject(Up3002Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allUp3002$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allUp3002$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadUp3002Success` to manually update list
     */
    it('allUp3002$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allUp3002$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Up3002Actions.loadUp3002Success({
          Up3002: [
            createUp3002Entity('AAA'),
            createUp3002Entity('BBB'),
          ],
        })
      );

      list = await readFirst(facade.allUp3002$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
