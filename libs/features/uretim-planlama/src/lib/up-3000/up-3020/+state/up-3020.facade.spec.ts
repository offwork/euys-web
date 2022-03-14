import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Up3020Actions from './up-3020.actions';
import { Up3020Effects } from './up-3020.effects';
import { Up3020Facade } from './up-3020.facade';
import { Up3020Entity } from './up-3020.models';
import {
  UP_3020_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './up-3020.reducer';
import * as Up3020Selectors from './up-3020.selectors';

interface TestSchema {
  Up3020: State;
}

describe('Up3020Facade', () => {
  let facade: Up3020Facade;
  let store: Store<TestSchema>;
  const createUp3020Entity = (
    id: string,
    name = ''
  ): Up3020Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(
            UP_3020_FEATURE_KEY,
            reducer
          ),
          EffectsModule.forFeature([Up3020Effects]),
        ],
        providers: [Up3020Facade],
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
      facade = TestBed.inject(Up3020Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allUp3020$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allUp3020$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadUp3020Success` to manually update list
     */
    it('allUp3020$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allUp3020$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Up3020Actions.loadUp3020Success({
          Up3020: [
            createUp3020Entity('AAA'),
            createUp3020Entity('BBB'),
          ],
        })
      );

      list = await readFirst(facade.allUp3020$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
