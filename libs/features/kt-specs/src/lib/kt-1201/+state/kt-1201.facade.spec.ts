import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1201Actions from './kt-1201.actions';
import { Kt1201Effects } from './kt-1201.effects';
import { Kt1201Facade } from './kt-1201.facade';
import { Kt1201Entity } from './kt-1201.models';
import { KT_1201_FEATURE_KEY, State, initialState, reducer } from './kt-1201.reducer';
import * as Kt1201Selectors from './kt-1201.selectors';

interface TestSchema {
  kt1201: State;
}

describe('Kt1201Facade', () => {
  let facade: Kt1201Facade;
  let store: Store<TestSchema>;
  const createKt1201Entity = (id: string, name = ''): Kt1201Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(KT_1201_FEATURE_KEY, reducer), EffectsModule.forFeature([Kt1201Effects])],
        providers: [Kt1201Facade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(Kt1201Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1201$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1201$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1201Success` to manually update list
     */
    it('allKt1201$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1201$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1201Actions.loadKt1201Success({
          kt1201: [createKt1201Entity('AAA'), createKt1201Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1201$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
