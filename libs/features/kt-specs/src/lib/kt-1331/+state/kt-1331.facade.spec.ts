import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1331Actions from './kt-1331.actions';
import { Kt1331Effects } from './kt-1331.effects';
import { Kt1331Facade } from './kt-1331.facade';
import { Kt1331Entity } from './kt-1331.models';
import {
  KT_1331_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './kt-1331.reducer';
import * as Kt1331Selectors from './kt-1331.selectors';

interface TestSchema {
  kt1331: State;
}

describe('Kt1331Facade', () => {
  let facade: Kt1331Facade;
  let store: Store<TestSchema>;
  const createKt1331Entity = (id: string, name = ''): Kt1331Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(KT_1331_FEATURE_KEY, reducer),
          EffectsModule.forFeature([Kt1331Effects]),
        ],
        providers: [Kt1331Facade],
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
      facade = TestBed.inject(Kt1331Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1331$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1331$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1331Success` to manually update list
     */
    it('allKt1331$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1331$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1331Actions.loadKt1331Success({
          kt1331: [createKt1331Entity('AAA'), createKt1331Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1331$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
