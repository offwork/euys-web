import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1248Actions from './kt-1248.actions';
import { Kt1248Effects } from './kt-1248.effects';
import { Kt1248Facade } from './kt-1248.facade';
import { Kt1248Entity } from './kt-1248.models';
import { KT_1248_FEATURE_KEY, State, initialState, reducer } from './kt-1248.reducer';
import * as Kt1248Selectors from './kt-1248.selectors';

interface TestSchema {
  kt1248: State;
}

describe('Kt1248Facade', () => {
  let facade: Kt1248Facade;
  let store: Store<TestSchema>;
  const createKt1248Entity = (id: string, name = ''): Kt1248Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(KT_1248_FEATURE_KEY, reducer), EffectsModule.forFeature([Kt1248Effects])],
        providers: [Kt1248Facade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(Kt1248Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1248$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1248$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1248Success` to manually update list
     */
    it('allKt1248$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1248$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1248Actions.loadKt1248Success({
          kt1248: [createKt1248Entity('AAA'), createKt1248Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1248$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
