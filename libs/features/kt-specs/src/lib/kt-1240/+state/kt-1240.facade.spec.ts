import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1240Actions from './kt-1240.actions';
import { Kt1240Effects } from './kt-1240.effects';
import { Kt1240Facade } from './kt-1240.facade';
import { Kt1240Entity } from './kt-1240.models';
import { KT_1240_FEATURE_KEY, State, initialState, reducer } from './kt-1240.reducer';
import * as Kt1240Selectors from './kt-1240.selectors';

interface TestSchema {
  kt1240: State;
}

describe('Kt1240Facade', () => {
  let facade: Kt1240Facade;
  let store: Store<TestSchema>;
  const createKt1240Entity = (id: string, name = ''): Kt1240Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(KT_1240_FEATURE_KEY, reducer), EffectsModule.forFeature([Kt1240Effects])],
        providers: [Kt1240Facade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(Kt1240Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1240$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1240$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1240Success` to manually update list
     */
    it('allKt1240$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1240$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1240Actions.loadKt1240Success({
          kt1240: [createKt1240Entity('AAA'), createKt1240Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1240$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
