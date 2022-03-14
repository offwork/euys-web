import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kk8104Actions from './kk-8104.actions';
import { Kk8104Effects } from './kk-8104.effects';
import { Kk8104Facade } from './kk-8104.facade';
import { Kk8104Entity } from './kk-8104.models';
import {
  KK_8104_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './kk-8104.reducer';
import * as Kk8104Selectors from './kk-8104.selectors';

interface TestSchema {
  kk8104: State;
}

describe('Kk8104Facade', () => {
  let facade: Kk8104Facade;
  let store: Store<TestSchema>;
  const createKk8104Entity = (id: string, name = ''): Kk8104Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(KK_8104_FEATURE_KEY, reducer),
          EffectsModule.forFeature([Kk8104Effects]),
        ],
        providers: [Kk8104Facade],
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
      facade = TestBed.inject(Kk8104Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKk8104$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKk8104$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKk8104Success` to manually update list
     */
    it('allKk8104$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKk8104$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kk8104Actions.loadKk8104Success({
          kk8104: [createKk8104Entity('AAA'), createKk8104Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKk8104$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
