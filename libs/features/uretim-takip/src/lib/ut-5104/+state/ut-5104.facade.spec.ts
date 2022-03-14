import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Ut5104Actions from './ut-5104.actions';
import { Ut5104Effects } from './ut-5104.effects';
import { Ut5104Facade } from './ut-5104.facade';
import { Ut5104Entity } from './ut-5104.models';
import {
  UT_5104_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './ut-5104.reducer';
import * as Ut5104Selectors from './ut-5104.selectors';

interface TestSchema {
  ut5104: State;
}

describe('Ut5104Facade', () => {
  let facade: Ut5104Facade;
  let store: Store<TestSchema>;
  const createUt5104Entity = (id: string, name = ''): Ut5104Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(UT_5104_FEATURE_KEY, reducer),
          EffectsModule.forFeature([Ut5104Effects]),
        ],
        providers: [Ut5104Facade],
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
      facade = TestBed.inject(Ut5104Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allUt5104$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allUt5104$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadUt5104Success` to manually update list
     */
    it('allUt5104$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allUt5104$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Ut5104Actions.loadUt5104Success({
          ut5104: [createUt5104Entity('AAA'), createUt5104Entity('BBB')],
        })
      );

      list = await readFirst(facade.allUt5104$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
