import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1232Actions from './kt-1232.actions';
import { Kt1232Effects } from './kt-1232.effects';
import { Kt1232Facade } from './kt-1232.facade';
import { Kt1232Entity } from './kt-1232.models';
import { KT_1232_FEATURE_KEY, State, initialState, reducer } from './kt-1232.reducer';
import * as Kt1232Selectors from './kt-1232.selectors';

interface TestSchema {
  kt1232: State;
}

describe('Kt1232Facade', () => {
  let facade: Kt1232Facade;
  let store: Store<TestSchema>;
  const createKt1232Entity = (id: string, name = ''): Kt1232Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(KT_1232_FEATURE_KEY, reducer), EffectsModule.forFeature([Kt1232Effects])],
        providers: [Kt1232Facade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(Kt1232Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1232$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1232$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1232Success` to manually update list
     */
    it('allKt1232$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1232$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1232Actions.loadKt1232Success({
          kt1232: [createKt1232Entity('AAA'), createKt1232Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1232$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
