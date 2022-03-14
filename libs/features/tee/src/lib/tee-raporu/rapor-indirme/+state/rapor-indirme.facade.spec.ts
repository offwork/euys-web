import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { RaporIndirmeEntity } from './rapor-indirme.models';
import { RaporIndirmeEffects } from './rapor-indirme.effects';
import { RaporIndirmeFacade } from './rapor-indirme.facade';

import * as RaporIndirmeSelectors from './rapor-indirme.selectors';
import * as RaporIndirmeActions from './rapor-indirme.actions';
import { RAPOR_INDIRME_FEATURE_KEY, State, initialState, reducer } from './rapor-indirme.reducer';

interface TestSchema {
  raporIndirme: State;
}

describe('RaporIndirmeFacade', () => {
  let facade: RaporIndirmeFacade;
  let store: Store<TestSchema>;
  const createRaporIndirmeEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as RaporIndirmeEntity);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(RAPOR_INDIRME_FEATURE_KEY, reducer),
          EffectsModule.forFeature([RaporIndirmeEffects]),
        ],
        providers: [RaporIndirmeFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(RaporIndirmeFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async (done) => {
      try {
        let list = await readFirst(facade.allRaporIndirme$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.init();

        list = await readFirst(facade.allRaporIndirme$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadRaporIndirmeSuccess` to manually update list
     */
    it('allRaporIndirme$ should return the loaded list; and loaded flag == true', async (done) => {
      try {
        let list = await readFirst(facade.allRaporIndirme$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          RaporIndirmeActions.loadRaporIndirmeSuccess({
            raporIndirme: [createRaporIndirmeEntity('AAA'), createRaporIndirmeEntity('BBB')],
          })
        );

        list = await readFirst(facade.allRaporIndirme$);
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
