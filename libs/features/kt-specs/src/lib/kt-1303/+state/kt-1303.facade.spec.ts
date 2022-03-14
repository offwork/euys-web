import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1303Actions from './kt-1303.actions';
import { Kt1303Effects } from './kt-1303.effects';
import { Kt1303Facade } from './kt-1303.facade';
import { Kt1303Entity } from './kt-1303.models';
import {
  KT_1303_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './kt-1303.reducer';
import * as Kt1303Selectors from './kt-1303.selectors';

interface TestSchema {
  kt1303: State;
}

describe('Kt1303Facade', () => {
  let facade: Kt1303Facade;
  let store: Store<TestSchema>;
  const createKt1303Entity = (id: string, name = ''): Kt1303Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(KT_1303_FEATURE_KEY, reducer),
          EffectsModule.forFeature([Kt1303Effects]),
        ],
        providers: [Kt1303Facade],
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
      facade = TestBed.inject(Kt1303Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1303$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1303$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1303Success` to manually update list
     */
    it('allKt1303$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1303$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1303Actions.loadKt1303Success({
          kt1303: [createKt1303Entity('AAA'), createKt1303Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1303$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
