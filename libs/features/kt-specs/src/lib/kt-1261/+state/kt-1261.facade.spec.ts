import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1261Actions from './kt-1261.actions';
import { Kt1261Effects } from './kt-1261.effects';
import { Kt1261Facade } from './kt-1261.facade';
import { Kt1261Entity } from './kt-1261.models';
import {
  KT_1261_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './kt-1261.reducer';
import * as Kt1261Selectors from './kt-1261.selectors';

interface TestSchema {
  kt1261: State;
}

describe('Kt1261Facade', () => {
  let facade: Kt1261Facade;
  let store: Store<TestSchema>;
  const createKt1261Entity = (id: string, name = ''): Kt1261Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(KT_1261_FEATURE_KEY, reducer),
          EffectsModule.forFeature([Kt1261Effects]),
        ],
        providers: [Kt1261Facade],
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
      facade = TestBed.inject(Kt1261Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1261$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1261$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1261Success` to manually update list
     */
    it('allKt1261$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1261$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1261Actions.loadKt1261Success({
          kt1261: [createKt1261Entity('AAA'), createKt1261Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1261$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
