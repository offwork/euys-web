import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Ut5105Actions from './ut-5105.actions';
import { Ut5105Effects } from './ut-5105.effects';
import { Ut5105Facade } from './ut-5105.facade';
import { Ut5105Entity } from './ut-5105.models';
import {
  UT_5105_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './ut-5105.reducer';
import * as Ut5105Selectors from './ut-5105.selectors';

interface TestSchema {
  ut5105: State;
}

describe('Ut5105Facade', () => {
  let facade: Ut5105Facade;
  let store: Store<TestSchema>;
  const createUt5105Entity = (id: string, name = ''): Ut5105Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(UT_5105_FEATURE_KEY, reducer),
          EffectsModule.forFeature([Ut5105Effects]),
        ],
        providers: [Ut5105Facade],
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
      facade = TestBed.inject(Ut5105Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allUt5105$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allUt5105$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadUt5105Success` to manually update list
     */
    it('allUt5105$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allUt5105$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Ut5105Actions.loadUt5105Success({
          ut5105: [createUt5105Entity('AAA'), createUt5105Entity('BBB')],
        })
      );

      list = await readFirst(facade.allUt5105$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
