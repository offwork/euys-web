import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Pfdm3104Actions from './pfdm-3104.actions';
import { Pfdm3104Effects } from './pfdm-3104.effects';
import { Pfdm3104Facade } from './pfdm-3104.facade';
import { Pfdm3104Entity } from './pfdm-3104.models';
import {
  PFDM_3104_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './pfdm-3104.reducer';
import * as Pfdm3104Selectors from './pfdm-3104.selectors';

interface TestSchema {
  pfdm3104: State;
}

describe('Pfdm3104Facade', () => {
  let facade: Pfdm3104Facade;
  let store: Store<TestSchema>;
  const createPfdm3104Entity = (id: string, name = ''): Pfdm3104Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(PFDM_3104_FEATURE_KEY, reducer),
          EffectsModule.forFeature([Pfdm3104Effects]),
        ],
        providers: [Pfdm3104Facade],
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
      facade = TestBed.inject(Pfdm3104Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allPfdm3104$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allPfdm3104$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadPfdm3104Success` to manually update list
     */
    it('allPfdm3104$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allPfdm3104$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Pfdm3104Actions.loadPfdm3104Success({
          pfdm3104: [createPfdm3104Entity('AAA'), createPfdm3104Entity('BBB')],
        })
      );

      list = await readFirst(facade.allPfdm3104$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
