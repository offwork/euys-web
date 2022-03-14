import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1249Actions from './kt-1249.actions';
import { Kt1249Effects } from './kt-1249.effects';
import { Kt1249Facade } from './kt-1249.facade';
import { Kt1249Entity } from './kt-1249.models';
import { KT_1249_FEATURE_KEY, State, initialState, reducer } from './kt-1249.reducer';
import * as Kt1249Selectors from './kt-1249.selectors';

interface TestSchema {
  kt1249: State;
}

describe('Kt1249Facade', () => {
  let facade: Kt1249Facade;
  let store: Store<TestSchema>;
  const createKt1249Entity = (id: string, name = ''): Kt1249Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(KT_1249_FEATURE_KEY, reducer), EffectsModule.forFeature([Kt1249Effects])],
        providers: [Kt1249Facade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(Kt1249Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1249$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1249$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1249Success` to manually update list
     */
    it('allKt1249$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1249$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1249Actions.loadKt1249Success({
          kt1249: [createKt1249Entity('AAA'), createKt1249Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1249$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
