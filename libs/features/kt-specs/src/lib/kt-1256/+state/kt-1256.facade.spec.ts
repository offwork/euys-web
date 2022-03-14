import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1256Actions from './kt-1256.actions';
import { Kt1256Effects } from './kt-1256.effects';
import { Kt1256Facade } from './kt-1256.facade';
import { Kt1256Entity } from './kt-1256.models';
import { KT_1256_FEATURE_KEY, State, initialState, reducer } from './kt-1256.reducer';
import * as Kt1256Selectors from './kt-1256.selectors';

interface TestSchema {
  kt1256: State;
}

describe('Kt1256Facade', () => {
  let facade: Kt1256Facade;
  let store: Store<TestSchema>;
  const createKt1256Entity = (id: string, name = ''): Kt1256Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(KT_1256_FEATURE_KEY, reducer), EffectsModule.forFeature([Kt1256Effects])],
        providers: [Kt1256Facade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(Kt1256Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1256$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1256$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1256Success` to manually update list
     */
    it('allKt1256$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1256$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1256Actions.loadKt1256Success({
          kt1256: [createKt1256Entity('AAA'), createKt1256Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1256$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
