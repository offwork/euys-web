import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Ut5101Actions from './ut-5101.actions';
import { Ut5101Effects } from './ut-5101.effects';
import { Ut5101Facade } from './ut-5101.facade';
import { Ut5101Entity } from './ut-5101.models';
import {
  UT_5101_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './ut-5101.reducer';
import * as Ut5101Selectors from './ut-5101.selectors';

interface TestSchema {
  Ut5101: State;
}

describe('Ut5101Facade', () => {
  let facade: Ut5101Facade;
  let store: Store<TestSchema>;
  const createUt5101Entity = (
    id: string,
    name = ''
  ): Ut5101Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(UT_5101_FEATURE_KEY, reducer),
          EffectsModule.forFeature([Ut5101Effects]),
        ],
        providers: [Ut5101Facade],
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
      facade = TestBed.inject(Ut5101Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allUt5101$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allUt5101$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadUt5101Success` to manually update list
     */
    it('allUt5101$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allUt5101$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Ut5101Actions.loadUt5101Success({
          Ut5101: [
            createUt5101Entity('AAA'),
            createUt5101Entity('BBB'),
          ],
        })
      );

      list = await readFirst(facade.allUt5101$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
