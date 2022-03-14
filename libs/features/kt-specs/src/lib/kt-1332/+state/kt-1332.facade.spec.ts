import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1332Actions from './kt-1332.actions';
import { Kt1332Effects } from './kt-1332.effects';
import { Kt1332Facade } from './kt-1332.facade';
import { Kt1332Entity } from './kt-1332.models';
import {
  KT_1303_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './kt-1332.reducer';
import * as Kt1332Selectors from './kt-1332.selectors';

interface TestSchema {
  kt1332: State;
}

describe('Kt1332Facade', () => {
  let facade: Kt1332Facade;
  let store: Store<TestSchema>;
  const createKt1332Entity = (id: string, name = ''): Kt1332Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(KT_1303_FEATURE_KEY, reducer),
          EffectsModule.forFeature([Kt1332Effects]),
        ],
        providers: [Kt1332Facade],
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
      facade = TestBed.inject(Kt1332Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1332$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1332$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1332Success` to manually update list
     */
    it('allKt1332$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1332$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1332Actions.loadKt1332Success({
          kt1332: [createKt1332Entity('AAA'), createKt1332Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1332$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
