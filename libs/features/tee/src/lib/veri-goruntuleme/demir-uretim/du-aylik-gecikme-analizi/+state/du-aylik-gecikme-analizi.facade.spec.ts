import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { DuAylikGecikmeAnaliziEntity } from './du-aylik-gecikme-analizi.models';
import { DuAylikGecikmeAnaliziEffects } from './du-aylik-gecikme-analizi.effects';
import { DuAylikGecikmeAnaliziFacade } from './du-aylik-gecikme-analizi.facade';

import * as DuAylikGecikmeAnaliziSelectors from './du-aylik-gecikme-analizi.selectors';
import * as DuAylikGecikmeAnaliziActions from './du-aylik-gecikme-analizi.actions';
import { DU_AYLIK_GECIKME_ANALIZI_FEATURE_KEY, State, initialState, reducer } from './du-aylik-gecikme-analizi.reducer';

interface TestSchema {
  duAylikGecikmeAnalizi: State;
}

describe('DuAylikGecikmeAnaliziFacade', () => {
  let facade: DuAylikGecikmeAnaliziFacade;
  let store: Store<TestSchema>;
  const createDuAylikGecikmeAnaliziEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as DuAylikGecikmeAnaliziEntity);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(DU_AYLIK_GECIKME_ANALIZI_FEATURE_KEY, reducer),
          EffectsModule.forFeature([DuAylikGecikmeAnaliziEffects]),
        ],
        providers: [DuAylikGecikmeAnaliziFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(DuAylikGecikmeAnaliziFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async (done) => {
      try {
        let list = await readFirst(facade.allDuAylikGecikmeAnalizi$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.init();

        list = await readFirst(facade.allDuAylikGecikmeAnalizi$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadDuAylikGecikmeAnaliziSuccess` to manually update list
     */
    it('allDuAylikGecikmeAnalizi$ should return the loaded list; and loaded flag == true', async (done) => {
      try {
        let list = await readFirst(facade.allDuAylikGecikmeAnalizi$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          DuAylikGecikmeAnaliziActions.loadDuAylikGecikmeAnaliziSuccess({
            duAylikGecikmeAnalizi: [createDuAylikGecikmeAnaliziEntity('AAA'), createDuAylikGecikmeAnaliziEntity('BBB')],
          })
        );

        list = await readFirst(facade.allDuAylikGecikmeAnalizi$);
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
