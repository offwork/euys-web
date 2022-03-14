import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1223Actions from './kt-1223.actions';
import { Kt1223Effects } from './kt-1223.effects';
import { Kt1223Facade } from './kt-1223.facade';
import { Kt1223Entity } from './kt-1223.models';
import { KT_1223_FEATURE_KEY, State, initialState, reducer } from './kt-1223.reducer';
import * as Kt1223Selectors from './kt-1223.selectors';

interface TestSchema {
  kt1223: State;
}

describe('Kt1223Facade', () => {
  let facade: Kt1223Facade;
  let store: Store<TestSchema>;
  const createKt1223Entity = (id: string, name = ''): Kt1223Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(KT_1223_FEATURE_KEY, reducer), EffectsModule.forFeature([Kt1223Effects])],
        providers: [Kt1223Facade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(Kt1223Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1223$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1223$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1223Success` to manually update list
     */
    it('allKt1223$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1223$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1223Actions.loadKt1223Success({
          kt1223: [createKt1223Entity('AAA'), createKt1223Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1223$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
