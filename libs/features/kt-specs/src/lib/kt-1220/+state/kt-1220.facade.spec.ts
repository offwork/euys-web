import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1220Actions from './kt-1220.actions';
import { Kt1220Effects } from './kt-1220.effects';
import { Kt1220Facade } from './kt-1220.facade';
import { Kt1220Entity } from './kt-1220.models';
import { KT_1219_FEATURE_KEY, State, initialState, reducer } from './kt-1220.reducer';
import * as Kt1220Selectors from './kt-1220.selectors';

interface TestSchema {
  kt1201: State;
}

describe('Kt1220Facade', () => {
  let facade: Kt1220Facade;
  let store: Store<TestSchema>;
  const createKt1220Entity = (id: string, name = ''): Kt1220Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(KT_1219_FEATURE_KEY, reducer), EffectsModule.forFeature([Kt1220Effects])],
        providers: [Kt1220Facade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(Kt1220Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1220$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1220$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1220Success` to manually update list
     */
    it('allKt1220$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1220$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1220Actions.loadKt1220Success({
          kt1201: [createKt1220Entity('AAA'), createKt1220Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1220$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
