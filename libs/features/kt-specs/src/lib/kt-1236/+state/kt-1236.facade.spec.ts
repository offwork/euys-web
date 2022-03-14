import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1236Actions from './kt-1236.actions';
import { Kt1236Effects } from './kt-1236.effects';
import { Kt1236Facade } from './kt-1236.facade';
import { Kt1236Entity } from './kt-1236.models';
import { KT_1236_FEATURE_KEY, State, initialState, reducer } from './kt-1236.reducer';
import * as Kt1236Selectors from './kt-1236.selectors';

interface TestSchema {
  kt1236: State;
}

describe('Kt1236Facade', () => {
  let facade: Kt1236Facade;
  let store: Store<TestSchema>;
  const createKt1236Entity = (id: string, name = ''): Kt1236Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(KT_1236_FEATURE_KEY, reducer), EffectsModule.forFeature([Kt1236Effects])],
        providers: [Kt1236Facade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(Kt1236Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1236$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1236$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1236Success` to manually update list
     */
    it('allKt1236$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1236$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1236Actions.loadKt1236Success({
          kt1236: [createKt1236Entity('AAA'), createKt1236Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1236$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
