import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1202Actions from './kt-1202.actions';
import { Kt1202Effects } from './kt-1202.effects';
import { Kt1202Facade } from './kt-1202.facade';
import { Kt1202Entity } from './kt-1202.models';
import { KT_1202_FEATURE_KEY, State, initialState, reducer } from './kt-1202.reducer';
import * as Kt1202Selectors from './kt-1202.selectors';

interface TestSchema {
  kt1202: State;
}

describe('Kt1202Facade', () => {
  let facade: Kt1202Facade;
  let store: Store<TestSchema>;
  const createKt1202Entity = (id: string, name = ''): Kt1202Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(KT_1202_FEATURE_KEY, reducer), EffectsModule.forFeature([Kt1202Effects])],
        providers: [Kt1202Facade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(Kt1202Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1202$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1202$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1202Success` to manually update list
     */
    it('allKt1202$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1202$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1202Actions.loadKt1202Success({
          kt1202: [createKt1202Entity('AAA'), createKt1202Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1202$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
