import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Ut5106Actions from './ut-5106.actions';
import { Ut5106Effects } from './ut-5106.effects';
import { Ut5106Facade } from './ut-5106.facade';
import { Ut5106Entity } from './ut-5106.models';
import {
  UT_5106_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './ut-5106.reducer';
import * as Ut5106Selectors from './ut-5106.selectors';

interface TestSchema {
  ut5106: State;
}

describe('Ut5106Facade', () => {
  let facade: Ut5106Facade;
  let store: Store<TestSchema>;
  const createUt5106Entity = (id: string, name = ''): Ut5106Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(UT_5106_FEATURE_KEY, reducer),
          EffectsModule.forFeature([Ut5106Effects]),
        ],
        providers: [Ut5106Facade],
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
      facade = TestBed.inject(Ut5106Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allUt5106$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allUt5106$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadUt5106Success` to manually update list
     */
    it('allUt5106$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allUt5106$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Ut5106Actions.loadUt5106Success({
          ut5106: [createUt5106Entity('AAA'), createUt5106Entity('BBB')],
        })
      );

      list = await readFirst(facade.allUt5106$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
