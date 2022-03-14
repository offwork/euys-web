import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as BazAnaBilgilerActions from './baz-ana-bilgiler.actions';
import { BazAnaBilgilerEffects } from './baz-ana-bilgiler.effects';
import { BazAnaBilgilerFacade } from './baz-ana-bilgiler.facade';
import { BazAnaBilgilerEntity } from './baz-ana-bilgiler.models';
import { BAZ_ANA_BILGILER_FEATURE_KEY, State, initialState, reducer } from './baz-ana-bilgiler.reducer';
import * as BazAnaBilgilerSelectors from './baz-ana-bilgiler.selectors';

interface TestSchema {
  bazAnaBilgiler: State;
}

describe('BazAnaBilgilerFacade', () => {
  let facade: BazAnaBilgilerFacade;
  let store: Store<TestSchema>;
  const createBazAnaBilgilerEntity = (id: string, name = ''): BazAnaBilgilerEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(BAZ_ANA_BILGILER_FEATURE_KEY, reducer),
          EffectsModule.forFeature([BazAnaBilgilerEffects]),
        ],
        providers: [BazAnaBilgilerFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(BazAnaBilgilerFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allBazAnaBilgiler$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allBazAnaBilgiler$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadBazAnaBilgilerSuccess` to manually update list
     */
    it('allBazAnaBilgiler$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allBazAnaBilgiler$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        BazAnaBilgilerActions.loadBazAnaBilgilerSuccess({
          bazAnaBilgiler: [createBazAnaBilgilerEntity('AAA'), createBazAnaBilgilerEntity('BBB')],
        })
      );

      list = await readFirst(facade.allBazAnaBilgiler$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
