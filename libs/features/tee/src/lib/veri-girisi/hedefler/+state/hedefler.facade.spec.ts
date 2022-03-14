import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { HedeflerEntity } from './hedefler.models';
import { HedeflerEffects } from './hedefler.effects';
import { HedeflerFacade } from './hedefler.facade';

import * as HedeflerSelectors from './hedefler.selectors';
import * as HedeflerActions from './hedefler.actions';
import { HEDEFLER_FEATURE_KEY, State, initialState, reducer } from './hedefler.reducer';

interface TestSchema {
  hedefler: State;
}

describe('HedeflerFacade', () => {
  let facade: HedeflerFacade;
  let store: Store<TestSchema>;
  const createHedeflerEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as HedeflerEntity);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(HEDEFLER_FEATURE_KEY, reducer), EffectsModule.forFeature([HedeflerEffects])],
        providers: [HedeflerFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(HedeflerFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async (done) => {
      try {
        let list = await readFirst(facade.allHedefler$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.init();

        list = await readFirst(facade.allHedefler$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadHedeflerSuccess` to manually update list
     */
    it('allHedefler$ should return the loaded list; and loaded flag == true', async (done) => {
      try {
        let list = await readFirst(facade.allHedefler$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          HedeflerActions.loadHedeflerSuccess({
            hedefler: [createHedeflerEntity('AAA'), createHedeflerEntity('BBB')],
          })
        );

        list = await readFirst(facade.allHedefler$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
