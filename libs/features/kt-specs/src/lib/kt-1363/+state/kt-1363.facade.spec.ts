import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1363Actions from './kt-1363.actions';
import { Kt1363Effects } from './kt-1363.effects';
import { Kt1363Facade } from './kt-1363.facade';
import { Kt1363Entity } from './kt-1363.models';
import {
  KT_1363_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './kt-1363.reducer';
import * as Kt1363Selectors from './kt-1363.selectors';

interface TestSchema {
  kt1363: State;
}

describe('Kt1363Facade', () => {
  let facade: Kt1363Facade;
  let store: Store<TestSchema>;
  const createKt1363Entity = (id: string, name = ''): Kt1363Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(KT_1363_FEATURE_KEY, reducer),
          EffectsModule.forFeature([Kt1363Effects]),
        ],
        providers: [Kt1363Facade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(Kt1363Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1363$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1363$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1363Success` to manually update list
     */
    it('allKt1363$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1363$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1363Actions.loadKt1363Success({
          kt1363: [createKt1363Entity('AAA'), createKt1363Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1363$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
