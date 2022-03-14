import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { DuTarihGecikmeAnaliziEntity } from './du-tarih-gecikme-analizi.models';
import { DuTarihGecikmeAnaliziEffects } from './du-tarih-gecikme-analizi.effects';
import { DuTarihGecikmeAnaliziFacade } from './du-tarih-gecikme-analizi.facade';

import * as DuTarihGecikmeAnaliziSelectors from './du-tarih-gecikme-analizi.selectors';
import * as DuTarihGecikmeAnaliziActions from './du-tarih-gecikme-analizi.actions';
import { DU_TARIH_GECIKME_ANALIZI_FEATURE_KEY, State, initialState, reducer } from './du-tarih-gecikme-analizi.reducer';

interface TestSchema {
  duTarihGecikmeAnalizi: State;
}

describe('DuTarihGecikmeAnaliziFacade', () => {
  let facade: DuTarihGecikmeAnaliziFacade;
  let store: Store<TestSchema>;
  const createDuTarihGecikmeAnaliziEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as DuTarihGecikmeAnaliziEntity);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(DU_TARIH_GECIKME_ANALIZI_FEATURE_KEY, reducer),
          EffectsModule.forFeature([DuTarihGecikmeAnaliziEffects]),
        ],
        providers: [DuTarihGecikmeAnaliziFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(DuTarihGecikmeAnaliziFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async (done) => {
      try {
        let list = await readFirst(facade.allDuTarihGecikmeAnalizi$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.init();

        list = await readFirst(facade.allDuTarihGecikmeAnalizi$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadDuTarihGecikmeAnaliziSuccess` to manually update list
     */
    it('allDuTarihGecikmeAnalizi$ should return the loaded list; and loaded flag == true', async (done) => {
      try {
        let list = await readFirst(facade.allDuTarihGecikmeAnalizi$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          DuTarihGecikmeAnaliziActions.loadDuTarihGecikmeAnaliziSuccess({
            duTarihGecikmeAnalizi: [createDuTarihGecikmeAnaliziEntity('AAA'), createDuTarihGecikmeAnaliziEntity('BBB')],
          })
        );

        list = await readFirst(facade.allDuTarihGecikmeAnalizi$);
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
