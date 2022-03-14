import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1318Actions from './kt-1318.actions';
import { Kt1318Effects } from './kt-1318.effects';
import { Kt1318Facade } from './kt-1318.facade';
import { Kt1318Entity } from './kt-1318.models';
import {
  KT_1318_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './kt-1318.reducer';
import * as Kt1318Selectors from './kt-1318.selectors';

interface TestSchema {
  kt1318: State;
}

describe('Kt1318Facade', () => {
  let facade: Kt1318Facade;
  let store: Store<TestSchema>;
  const createKt1318Entity = (id: string, name = ''): Kt1318Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(KT_1318_FEATURE_KEY, reducer),
          EffectsModule.forFeature([Kt1318Effects]),
        ],
        providers: [Kt1318Facade],
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
      facade = TestBed.inject(Kt1318Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1318$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1318$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1318Success` to manually update list
     */
    it('allKt1318$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1318$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1318Actions.loadKt1318Success({
          kt1318: [createKt1318Entity('AAA'), createKt1318Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1318$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
