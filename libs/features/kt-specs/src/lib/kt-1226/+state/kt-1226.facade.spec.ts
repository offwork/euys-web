import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1226Actions from './kt-1226.actions';
import { Kt1226Effects } from './kt-1226.effects';
import { Kt1226Facade } from './kt-1226.facade';
import { Kt1226Entity } from './kt-1226.models';
import { KT_1226_FEATURE_KEY, State, initialState, reducer } from './kt-1226.reducer';
import * as Kt1226Selectors from './kt-1226.selectors';

interface TestSchema {
  kt1226: State;
}

describe('Kt1226Facade', () => {
  let facade: Kt1226Facade;
  let store: Store<TestSchema>;
  const createKt1226Entity = (id: string, name = ''): Kt1226Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(KT_1226_FEATURE_KEY, reducer), EffectsModule.forFeature([Kt1226Effects])],
        providers: [Kt1226Facade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(Kt1226Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1226$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1226$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1226Success` to manually update list
     */
    it('allKt1226$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1226$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1226Actions.loadKt1226Success({
          kt1226: [createKt1226Entity('AAA'), createKt1226Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1226$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
