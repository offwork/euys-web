import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { KsyfStandartHatHiziEntity } from './ksyf-standart-hat-hizi.models';
import { KsyfStandartHatHiziEffects } from './ksyf-standart-hat-hizi.effects';
import { KsyfStandartHatHiziFacade } from './ksyf-standart-hat-hizi.facade';

import * as KsyfStandartHatHiziSelectors from './ksyf-standart-hat-hizi.selectors';
import * as KsyfStandartHatHiziActions from './ksyf-standart-hat-hizi.actions';
import { KSYF_STANDART_HAT_HIZI_FEATURE_KEY, State, initialState, reducer } from './ksyf-standart-hat-hizi.reducer';

interface TestSchema {
  ksyfStandartHatHizi: State;
}

describe('KsyfStandartHatHiziFacade', () => {
  let facade: KsyfStandartHatHiziFacade;
  let store: Store<TestSchema>;
  const createKsyfStandartHatHiziEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as KsyfStandartHatHiziEntity);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(KSYF_STANDART_HAT_HIZI_FEATURE_KEY, reducer),
          EffectsModule.forFeature([KsyfStandartHatHiziEffects]),
        ],
        providers: [KsyfStandartHatHiziFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(KsyfStandartHatHiziFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async (done) => {
      try {
        let list = await readFirst(facade.allKsyfStandartHatHizi$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.init();

        list = await readFirst(facade.allKsyfStandartHatHizi$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadKsyfStandartHatHiziSuccess` to manually update list
     */
    it('allKsyfStandartHatHizi$ should return the loaded list; and loaded flag == true', async (done) => {
      try {
        let list = await readFirst(facade.allKsyfStandartHatHizi$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          KsyfStandartHatHiziActions.loadKsyfStandartHatHiziSuccess({
            ksyfStandartHatHizi: [createKsyfStandartHatHiziEntity('AAA'), createKsyfStandartHatHiziEntity('BBB')],
          })
        );

        list = await readFirst(facade.allKsyfStandartHatHizi$);
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
