import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Up3030Actions from './up-3030.actions';
import { Up3030Effects } from './up-3030.effects';
import { Up3030Facade } from './up-3030.facade';
import { Up3030Entity } from './up-3030.models';
import {
  UP_3030_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './up-3030.reducer';
import * as Up3030Selectors from './up-3030.selectors';

interface TestSchema {
  up3030: State;
}

describe('Up3030Facade', () => {
  let facade: Up3030Facade;
  let store: Store<TestSchema>;
  const createUp3030Entity = (id: string, name = ''): Up3030Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(UP_3030_FEATURE_KEY, reducer),
          EffectsModule.forFeature([Up3030Effects]),
        ],
        providers: [Up3030Facade],
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
      facade = TestBed.inject(Up3030Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allUp3030$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allUp3030$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadUp3030Success` to manually update list
     */
    it('allUp3030$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allUp3030$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Up3030Actions.loadUp3030Success({
          up3030: [createUp3030Entity('AAA'), createUp3030Entity('BBB')],
        })
      );

      list = await readFirst(facade.allUp3030$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
