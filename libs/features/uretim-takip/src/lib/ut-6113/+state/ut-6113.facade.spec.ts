import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Ut6113Actions from './ut-6113.actions';
import { Ut6113Effects } from './ut-6113.effects';
import { Ut6113Facade } from './ut-6113.facade';
import { Ut6113Entity } from './ut-6113.models';
import {
  UT_6113_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './ut-6113.reducer';
import * as Ut6113Selectors from './ut-6113.selectors';

interface TestSchema {
  ut6113: State;
}

describe('Ut6113Facade', () => {
  let facade: Ut6113Facade;
  let store: Store<TestSchema>;
  const createUt6113Entity = (id: string, name = ''): Ut6113Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(UT_6113_FEATURE_KEY, reducer),
          EffectsModule.forFeature([Ut6113Effects]),
        ],
        providers: [Ut6113Facade],
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
      facade = TestBed.inject(Ut6113Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allUt6113$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allUt6113$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadUt6113Success` to manually update list
     */
    it('allUt6113$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allUt6113$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Ut6113Actions.loadUt6113Success({
          ut6113: [createUt6113Entity('AAA'), createUt6113Entity('BBB')],
        })
      );

      list = await readFirst(facade.allUt6113$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
