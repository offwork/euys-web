import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Ut6114Actions from './ut-6114.actions';
import { Ut6114Effects } from './ut-6114.effects';
import { Ut6114Facade } from './ut-6114.facade';
import { Ut6114Entity } from './ut-6114.models';
import {
  UT_6114_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './ut-6114.reducer';
import * as Ut6114Selectors from './ut-6114.selectors';

interface TestSchema {
  ut6114: State;
}

describe('Ut6114Facade', () => {
  let facade: Ut6114Facade;
  let store: Store<TestSchema>;
  const createUt6114Entity = (id: string, name = ''): Ut6114Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(UT_6114_FEATURE_KEY, reducer),
          EffectsModule.forFeature([Ut6114Effects]),
        ],
        providers: [Ut6114Facade],
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
      facade = TestBed.inject(Ut6114Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allUt6114$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allUt6114$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadUt6114Success` to manually update list
     */
    it('allUt6114$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allUt6114$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Ut6114Actions.loadUt6114Success({
          ut6114: [createUt6114Entity('AAA'), createUt6114Entity('BBB')],
        })
      );

      list = await readFirst(facade.allUt6114$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
