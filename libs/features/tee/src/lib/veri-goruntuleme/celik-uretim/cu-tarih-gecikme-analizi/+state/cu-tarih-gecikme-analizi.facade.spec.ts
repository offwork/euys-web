import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { CuTarihGecikmeAnaliziEntity } from './cu-tarih-gecikme-analizi.models';
import { CuTarihGecikmeAnaliziEffects } from './cu-tarih-gecikme-analizi.effects';
import { CuTarihGecikmeAnaliziFacade } from './cu-tarih-gecikme-analizi.facade';

import * as CuTarihGecikmeAnaliziSelectors from './cu-tarih-gecikme-analizi.selectors';
import * as CuTarihGecikmeAnaliziActions from './cu-tarih-gecikme-analizi.actions';
import { CU_TARIH_GECIKME_ANALIZI_FEATURE_KEY, State, initialState, reducer } from './cu-tarih-gecikme-analizi.reducer';

interface TestSchema {
  cuTarihGecikmeAnalizi: State;
}

describe('CuTarihGecikmeAnaliziFacade', () => {
  let facade: CuTarihGecikmeAnaliziFacade;
  let store: Store<TestSchema>;
  const createCuTarihGecikmeAnaliziEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as CuTarihGecikmeAnaliziEntity);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(CU_TARIH_GECIKME_ANALIZI_FEATURE_KEY, reducer),
          EffectsModule.forFeature([CuTarihGecikmeAnaliziEffects]),
        ],
        providers: [CuTarihGecikmeAnaliziFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(CuTarihGecikmeAnaliziFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async (done) => {
      try {
        let list = await readFirst(facade.allCuTarihGecikmeAnalizi$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.init();

        list = await readFirst(facade.allCuTarihGecikmeAnalizi$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadCuTarihGecikmeAnaliziSuccess` to manually update list
     */
    it('allCuTarihGecikmeAnalizi$ should return the loaded list; and loaded flag == true', async (done) => {
      try {
        let list = await readFirst(facade.allCuTarihGecikmeAnalizi$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          CuTarihGecikmeAnaliziActions.loadCuTarihGecikmeAnaliziSuccess({
            cuTarihGecikmeAnalizi: [createCuTarihGecikmeAnaliziEntity('AAA'), createCuTarihGecikmeAnaliziEntity('BBB')],
          })
        );

        list = await readFirst(facade.allCuTarihGecikmeAnalizi$);
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
