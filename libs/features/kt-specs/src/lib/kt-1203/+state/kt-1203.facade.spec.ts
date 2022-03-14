import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1203Actions from './kt-1203.actions';
import { Kt1203Effects } from './kt-1203.effects';
import { Kt1203Facade } from './kt-1203.facade';
import { Kt1203Entity } from './kt-1203.models';
import { KT_1203_FEATURE_KEY, State, initialState, reducer } from './kt-1203.reducer';
import * as Kt1203Selectors from './kt-1203.selectors';

interface TestSchema {
  kt1203: State;
}

describe('Kt1203Facade', () => {
  let facade: Kt1203Facade;
  let store: Store<TestSchema>;
  const createKt1203Entity = (id: string, name = ''): Kt1203Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(KT_1203_FEATURE_KEY, reducer), EffectsModule.forFeature([Kt1203Effects])],
        providers: [Kt1203Facade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(Kt1203Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1203$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1203$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1203Success` to manually update list
     */
    it('allKt1203$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1203$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1203Actions.loadKt1203Success({
          kt1203: [createKt1203Entity('AAA'), createKt1203Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1203$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
