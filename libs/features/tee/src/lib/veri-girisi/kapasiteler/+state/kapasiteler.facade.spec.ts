import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { KapasitelerEntity } from './kapasiteler.models';
import { KapasitelerEffects } from './kapasiteler.effects';
import { KapasitelerFacade } from './kapasiteler.facade';

import * as KapasitelerSelectors from './kapasiteler.selectors';
import * as KapasitelerActions from './kapasiteler.actions';
import { KAPASITELER_FEATURE_KEY, State, initialState, reducer } from './kapasiteler.reducer';

interface TestSchema {
  kapasiteler: State;
}

describe('KapasitelerFacade', () => {
  let facade: KapasitelerFacade;
  let store: Store<TestSchema>;
  const createKapasitelerEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as KapasitelerEntity);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(KAPASITELER_FEATURE_KEY, reducer),
          EffectsModule.forFeature([KapasitelerEffects]),
        ],
        providers: [KapasitelerFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(KapasitelerFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async (done) => {
      try {
        let list = await readFirst(facade.allKapasiteler$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.init();

        list = await readFirst(facade.allKapasiteler$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadKapasitelerSuccess` to manually update list
     */
    it('allKapasiteler$ should return the loaded list; and loaded flag == true', async (done) => {
      try {
        let list = await readFirst(facade.allKapasiteler$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          KapasitelerActions.loadKapasitelerSuccess({
            kapasiteler: [createKapasitelerEntity('AAA'), createKapasitelerEntity('BBB')],
          })
        );

        list = await readFirst(facade.allKapasiteler$);
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
