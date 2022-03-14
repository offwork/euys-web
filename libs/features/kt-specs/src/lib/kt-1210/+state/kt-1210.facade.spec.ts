import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1210Actions from './kt-1210.actions';
import { Kt1210Effects } from './kt-1210.effects';
import { Kt1210Facade } from './kt-1210.facade';
import { Kt1210Entity } from './kt-1210.models';
import { KT_1210_FEATURE_KEY, State, initialState, reducer } from './kt-1210.reducer';
import * as Kt1210Selectors from './kt-1210.selectors';

interface TestSchema {
  kt1210: State;
}

describe('Kt1210Facade', () => {
  let facade: Kt1210Facade;
  let store: Store<TestSchema>;
  const createKt1210Entity = (id: string, name = ''): Kt1210Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(KT_1210_FEATURE_KEY, reducer), EffectsModule.forFeature([Kt1210Effects])],
        providers: [Kt1210Facade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(Kt1210Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1210$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1210$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1210Success` to manually update list
     */
    it('allKt1210$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1210$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1210Actions.loadKt1210Success({
          kt1210: [createKt1210Entity('AAA'), createKt1210Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1210$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
