import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1301Actions from './kt-1301.actions';
import { Kt1301Effects } from './kt-1301.effects';
import { Kt1301Facade } from './kt-1301.facade';
import { Kt1301Entity } from './kt-1301.models';
import {
  KT_1301_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './kt-1301.reducer';
import * as Kt1301Selectors from './kt-1301.selectors';

interface TestSchema {
  kt1301: State;
}

describe('Kt1301Facade', () => {
  let facade: Kt1301Facade;
  let store: Store<TestSchema>;
  const createKt1301Entity = (id: string, name = ''): Kt1301Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(KT_1301_FEATURE_KEY, reducer),
          EffectsModule.forFeature([Kt1301Effects]),
        ],
        providers: [Kt1301Facade],
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
      facade = TestBed.inject(Kt1301Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1301$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1301$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1301Success` to manually update list
     */
    it('allKt1301$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1301$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1301Actions.loadKt1301Success({
          kt1301: [createKt1301Entity('AAA'), createKt1301Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1301$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
