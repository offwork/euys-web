import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1344Actions from './kt-1344.actions';
import { Kt1344Effects } from './kt-1344.effects';
import { Kt1344Facade } from './kt-1344.facade';
import { Kt1344Entity } from './kt-1344.models';
import {
  KT_1344_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './kt-1344.reducer';
import * as Kt1344Selectors from './kt-1344.selectors';

interface TestSchema {
  kt1344: State;
}

describe('Kt1344Facade', () => {
  let facade: Kt1344Facade;
  let store: Store<TestSchema>;
  const createKt1344Entity = (id: string, name = ''): Kt1344Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(KT_1344_FEATURE_KEY, reducer),
          EffectsModule.forFeature([Kt1344Effects]),
        ],
        providers: [Kt1344Facade],
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
      facade = TestBed.inject(Kt1344Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1344$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1344$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1344Success` to manually update list
     */
    it('allKt1344$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1344$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1344Actions.loadKt1344Success({
          kt1344: [createKt1344Entity('AAA'), createKt1344Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1344$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
