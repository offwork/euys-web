import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { CuAylikGecikmeAnaliziEntity } from './cu-aylik-gecikme-analizi.models';
import { CuAylikGecikmeAnaliziEffects } from './cu-aylik-gecikme-analizi.effects';
import { CuAylikGecikmeAnaliziFacade } from './cu-aylik-gecikme-analizi.facade';

import * as CuAylikGecikmeAnaliziSelectors from './cu-aylik-gecikme-analizi.selectors';
import * as CuAylikGecikmeAnaliziActions from './cu-aylik-gecikme-analizi.actions';
import { CU_AYLIK_GECIKME_ANALIZI_FEATURE_KEY, State, initialState, reducer } from './cu-aylik-gecikme-analizi.reducer';

interface TestSchema {
  cuAylikGecikmeAnalizi: State;
}

describe('CuAylikGecikmeAnaliziFacade', () => {
  let facade: CuAylikGecikmeAnaliziFacade;
  let store: Store<TestSchema>;
  const createCuAylikGecikmeAnaliziEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as CuAylikGecikmeAnaliziEntity);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(CU_AYLIK_GECIKME_ANALIZI_FEATURE_KEY, reducer),
          EffectsModule.forFeature([CuAylikGecikmeAnaliziEffects]),
        ],
        providers: [CuAylikGecikmeAnaliziFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(CuAylikGecikmeAnaliziFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async (done) => {
      try {
        let list = await readFirst(facade.allCuAylikGecikmeAnalizi$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.init();

        list = await readFirst(facade.allCuAylikGecikmeAnalizi$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadCuAylikGecikmeAnaliziSuccess` to manually update list
     */
    it('allCuAylikGecikmeAnalizi$ should return the loaded list; and loaded flag == true', async (done) => {
      try {
        let list = await readFirst(facade.allCuAylikGecikmeAnalizi$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          CuAylikGecikmeAnaliziActions.loadCuAylikGecikmeAnaliziSuccess({
            cuAylikGecikmeAnalizi: [createCuAylikGecikmeAnaliziEntity('AAA'), createCuAylikGecikmeAnaliziEntity('BBB')],
          })
        );

        list = await readFirst(facade.allCuAylikGecikmeAnalizi$);
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
