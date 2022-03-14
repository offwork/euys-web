import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Ut6112Actions from './ut-6112.actions';
import { Ut6112Effects } from './ut-6112.effects';
import { Ut6112Facade } from './ut-6112.facade';
import { Ut6112Entity } from './ut-6112.models';
import {
  UT_6112_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './ut-6112.reducer';
import * as Ut6112Selectors from './ut-6112.selectors';

interface TestSchema {
  ut6112: State;
}

describe('Ut6112Facade', () => {
  let facade: Ut6112Facade;
  let store: Store<TestSchema>;
  const createUt6112Entity = (id: string, name = ''): Ut6112Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(UT_6112_FEATURE_KEY, reducer),
          EffectsModule.forFeature([Ut6112Effects]),
        ],
        providers: [Ut6112Facade],
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
      facade = TestBed.inject(Ut6112Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allUt6112$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allUt6112$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadUt6112Success` to manually update list
     */
    it('allUt6112$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allUt6112$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Ut6112Actions.loadUt6112Success({
          ut6112: [createUt6112Entity('AAA'), createUt6112Entity('BBB')],
        })
      );

      list = await readFirst(facade.allUt6112$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
