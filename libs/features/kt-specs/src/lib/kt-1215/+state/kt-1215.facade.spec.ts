import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1215Actions from './kt-1215.actions';
import { Kt1215Effects } from './kt-1215.effects';
import { Kt1215Facade } from './kt-1215.facade';
import { Kt1215Entity } from './kt-1215.models';
import { KT_1215_FEATURE_KEY, State, initialState, reducer } from './kt-1215.reducer';
import * as Kt1215Selectors from './kt-1215.selectors';

interface TestSchema {
  kt1215: State;
}

describe('Kt1215Facade', () => {
  let facade: Kt1215Facade;
  let store: Store<TestSchema>;
  const createKt1215Entity = (id: string, name = ''): Kt1215Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(KT_1215_FEATURE_KEY, reducer), EffectsModule.forFeature([Kt1215Effects])],
        providers: [Kt1215Facade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(Kt1215Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1215$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1215$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1215Success` to manually update list
     */
    it('allKt1215$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1215$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1215Actions.loadKt1215Success({
          kt1215: [createKt1215Entity('AAA'), createKt1215Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1215$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
