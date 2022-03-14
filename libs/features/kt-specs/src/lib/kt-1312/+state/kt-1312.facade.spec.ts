import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1312Actions from './kt-1312.actions';
import { Kt1312Effects } from './kt-1312.effects';
import { Kt1312Facade } from './kt-1312.facade';
import { Kt1312Entity } from './kt-1312.models';
import {
  KT_1303_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './kt-1312.reducer';
import * as Kt1312Selectors from './kt-1312.selectors';

interface TestSchema {
  kt1312: State;
}

describe('Kt1312Facade', () => {
  let facade: Kt1312Facade;
  let store: Store<TestSchema>;
  const createKt1312Entity = (id: string, name = ''): Kt1312Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(KT_1303_FEATURE_KEY, reducer),
          EffectsModule.forFeature([Kt1312Effects]),
        ],
        providers: [Kt1312Facade],
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
      facade = TestBed.inject(Kt1312Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1312$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1312$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1312Success` to manually update list
     */
    it('allKt1312$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1312$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1312Actions.loadKt1312Success({
          kt1312: [createKt1312Entity('AAA'), createKt1312Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1312$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
