import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1340Actions from './kt-1340.actions';
import { Kt1340Effects } from './kt-1340.effects';
import { Kt1340Facade } from './kt-1340.facade';
import { Kt1340Entity } from './kt-1340.models';
import {
  KT_1340_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './kt-1340.reducer';
import * as Kt1340Selectors from './kt-1340.selectors';

interface TestSchema {
  kt1340: State;
}

describe('Kt1340Facade', () => {
  let facade: Kt1340Facade;
  let store: Store<TestSchema>;
  const createKt1340Entity = (id: string, name = ''): Kt1340Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(KT_1340_FEATURE_KEY, reducer),
          EffectsModule.forFeature([Kt1340Effects]),
        ],
        providers: [Kt1340Facade],
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
      facade = TestBed.inject(Kt1340Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1340$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1340$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1340Success` to manually update list
     */
    it('allKt1340$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1340$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1340Actions.loadKt1340Success({
          kt1340: [createKt1340Entity('AAA'), createKt1340Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1340$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
