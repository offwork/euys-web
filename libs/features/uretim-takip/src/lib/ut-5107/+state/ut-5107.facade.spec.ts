import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Ut5107Actions from './ut-5107.actions';
import { Ut5107Effects } from './ut-5107.effects';
import { Ut5107Facade } from './ut-5107.facade';
import { Ut5107Entity } from './ut-5107.models';
import {
  UT_5107_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './ut-5107.reducer';
import * as Ut5107Selectors from './ut-5107.selectors';

interface TestSchema {
  ut5107: State;
}

describe('Ut5107Facade', () => {
  let facade: Ut5107Facade;
  let store: Store<TestSchema>;
  const createUt5107Entity = (id: string, name = ''): Ut5107Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(UT_5107_FEATURE_KEY, reducer),
          EffectsModule.forFeature([Ut5107Effects]),
        ],
        providers: [Ut5107Facade],
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
      facade = TestBed.inject(Ut5107Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allUt5107$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allUt5107$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadUt5107Success` to manually update list
     */
    it('allUt5107$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allUt5107$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Ut5107Actions.loadUt5107Success({
          ut5107: [createUt5107Entity('AAA'), createUt5107Entity('BBB')],
        })
      );

      list = await readFirst(facade.allUt5107$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
