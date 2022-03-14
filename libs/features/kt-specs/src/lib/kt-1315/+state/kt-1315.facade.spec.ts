import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1315Actions from './kt-1315.actions';
import { Kt1315Effects } from './kt-1315.effects';
import { Kt1315Facade } from './kt-1315.facade';
import { Kt1315Entity } from './kt-1315.models';
import {
  KT_1315_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './kt-1315.reducer';
import * as Kt1315Selectors from './kt-1315.selectors';

interface TestSchema {
  kt1315: State;
}

describe('Kt1315Facade', () => {
  let facade: Kt1315Facade;
  let store: Store<TestSchema>;
  const createKt1315Entity = (id: string, name = ''): Kt1315Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(KT_1315_FEATURE_KEY, reducer),
          EffectsModule.forFeature([Kt1315Effects]),
        ],
        providers: [Kt1315Facade],
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
      facade = TestBed.inject(Kt1315Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1315$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1315$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1315Success` to manually update list
     */
    it('allKt1315$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1315$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1315Actions.loadKt1315Success({
          kt1315: [createKt1315Entity('AAA'), createKt1315Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1315$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
