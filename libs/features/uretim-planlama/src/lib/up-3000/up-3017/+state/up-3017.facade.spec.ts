import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Up3017Actions from './up-3017.actions';
import { Up3017Effects } from './up-3017.effects';
import { Up3017Facade } from './up-3017.facade';
import { Up3017Entity } from './up-3017.models';
import {
  UP_3017_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './up-3017.reducer';
import * as Up3017Selectors from './up-3017.selectors';

interface TestSchema {
  up3017: State;
}

describe('Up3017Facade', () => {
  let facade: Up3017Facade;
  let store: Store<TestSchema>;
  const createUp3017Entity = (id: string, name = ''): Up3017Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(UP_3017_FEATURE_KEY, reducer),
          EffectsModule.forFeature([Up3017Effects]),
        ],
        providers: [Up3017Facade],
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
      facade = TestBed.inject(Up3017Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allUp3017$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allUp3017$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadUp3017Success` to manually update list
     */
    it('allUp3017$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allUp3017$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Up3017Actions.loadUp3017Success({
          up3017: [createUp3017Entity('AAA'), createUp3017Entity('BBB')],
        })
      );

      list = await readFirst(facade.allUp3017$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
