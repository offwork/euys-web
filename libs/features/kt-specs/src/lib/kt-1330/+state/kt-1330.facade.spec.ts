import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1330Actions from './kt-1330.actions';
import { Kt1330Effects } from './kt-1330.effects';
import { Kt1330Facade } from './kt-1330.facade';
import { Kt1330Entity } from './kt-1330.models';
import {
  KT_1331_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './kt-1330.reducer';
import * as Kt1330Selectors from './kt-1330.selectors';

interface TestSchema {
  kt1331: State;
}

describe('Kt1330Facade', () => {
  let facade: Kt1330Facade;
  let store: Store<TestSchema>;
  const createKt1330Entity = (id: string, name = ''): Kt1330Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(KT_1331_FEATURE_KEY, reducer),
          EffectsModule.forFeature([Kt1330Effects]),
        ],
        providers: [Kt1330Facade],
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
      facade = TestBed.inject(Kt1330Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1330$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1330$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1330Success` to manually update list
     */
    it('allKt1330$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1330$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1330Actions.loadKt1330Success({
          kt1331: [createKt1330Entity('AAA'), createKt1330Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1330$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
