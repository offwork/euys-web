import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Ut5102Actions from './ut-5102.actions';
import { Ut5102Effects } from './ut-5102.effects';
import { Ut5102Facade } from './ut-5102.facade';
import { Ut5102Entity } from './ut-5102.models';
import {
  UT_5102_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './ut-5102.reducer';
import * as Ut5102Selectors from './ut-5102.selectors';

interface TestSchema {
  ut5102: State;
}

describe('Ut5102Facade', () => {
  let facade: Ut5102Facade;
  let store: Store<TestSchema>;
  const createUt5102Entity = (id: string, name = ''): Ut5102Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(UT_5102_FEATURE_KEY, reducer),
          EffectsModule.forFeature([Ut5102Effects]),
        ],
        providers: [Ut5102Facade],
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
      facade = TestBed.inject(Ut5102Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allUt5102$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allUt5102$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadUt5102Success` to manually update list
     */
    it('allUt5102$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allUt5102$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Ut5102Actions.loadUt5102Success({
          ut5102: [createUt5102Entity('AAA'), createUt5102Entity('BBB')],
        })
      );

      list = await readFirst(facade.allUt5102$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
