import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1250Actions from './kt-1250.actions';
import { Kt1250Effects } from './kt-1250.effects';
import { Kt1250Facade } from './kt-1250.facade';
import { Kt1250Entity } from './kt-1250.models';
import { KT_1250_FEATURE_KEY, State, initialState, reducer } from './kt-1250.reducer';
import * as Kt1250Selectors from './kt-1250.selectors';

interface TestSchema {
  kt1250: State;
}

describe('Kt1250Facade', () => {
  let facade: Kt1250Facade;
  let store: Store<TestSchema>;
  const createKt1250Entity = (id: string, name = ''): Kt1250Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(KT_1250_FEATURE_KEY, reducer), EffectsModule.forFeature([Kt1250Effects])],
        providers: [Kt1250Facade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(Kt1250Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1250$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1250$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1250Success` to manually update list
     */
    it('allKt1250$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1250$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1250Actions.loadKt1250Success({
          kt1250: [createKt1250Entity('AAA'), createKt1250Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1250$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
