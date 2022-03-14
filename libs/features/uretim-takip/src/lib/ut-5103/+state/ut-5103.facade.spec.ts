import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Ut5103Actions from './ut-5103.actions';
import { Ut5103Effects } from './ut-5103.effects';
import { Ut5103Facade } from './ut-5103.facade';
import { Ut5103Entity } from './ut-5103.models';
import {
  UT_5103_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './ut-5103.reducer';
import * as Ut5103Selectors from './ut-5103.selectors';

interface TestSchema {
  ut5103: State;
}

describe('Ut5103Facade', () => {
  let facade: Ut5103Facade;
  let store: Store<TestSchema>;
  const createUt5103Entity = (id: string, name = ''): Ut5103Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(UT_5103_FEATURE_KEY, reducer),
          EffectsModule.forFeature([Ut5103Effects]),
        ],
        providers: [Ut5103Facade],
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
      facade = TestBed.inject(Ut5103Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allUt5103$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allUt5103$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadUt5103Success` to manually update list
     */
    it('allUt5103$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allUt5103$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Ut5103Actions.loadUt5103Success({
          ut5103: [createUt5103Entity('AAA'), createUt5103Entity('BBB')],
        })
      );

      list = await readFirst(facade.allUt5103$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
