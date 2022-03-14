import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Ut5108Actions from './ut-5108.actions';
import { Ut5108Effects } from './ut-5108.effects';
import { Ut5108Facade } from './ut-5108.facade';
import { Ut5108Entity } from './ut-5108.models';
import {
  UT_5108_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './ut-5108.reducer';
import * as Ut5108Selectors from './ut-5108.selectors';

interface TestSchema {
  ut5108: State;
}

describe('Ut5108Facade', () => {
  let facade: Ut5108Facade;
  let store: Store<TestSchema>;
  const createUt5108Entity = (id: string, name = ''): Ut5108Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(UT_5108_FEATURE_KEY, reducer),
          EffectsModule.forFeature([Ut5108Effects]),
        ],
        providers: [Ut5108Facade],
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
      facade = TestBed.inject(Ut5108Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allUt5108$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allUt5108$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadUt5108Success` to manually update list
     */
    it('allUt5108$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allUt5108$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Ut5108Actions.loadUt5108Success({
          ut5108: [createUt5108Entity('AAA'), createUt5108Entity('BBB')],
        })
      );

      list = await readFirst(facade.allUt5108$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
