import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { HedefFiiliGrafikEntity } from './hedef-fiili-grafik.models';
import { HedefFiiliGrafikEffects } from './hedef-fiili-grafik.effects';
import { HedefFiiliGrafikFacade } from './hedef-fiili-grafik.facade';

import * as HedefFiiliGrafikSelectors from './hedef-fiili-grafik.selectors';
import * as HedefFiiliGrafikActions from './hedef-fiili-grafik.actions';
import { HEDEF_FIILI_GRAFIK_FEATURE_KEY, State, initialState, reducer } from './hedef-fiili-grafik.reducer';

interface TestSchema {
  hedefFiiliGrafik: State;
}

describe('HedefFiiliGrafikFacade', () => {
  let facade: HedefFiiliGrafikFacade;
  let store: Store<TestSchema>;
  const createHedefFiiliGrafikEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as HedefFiiliGrafikEntity);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(HEDEF_FIILI_GRAFIK_FEATURE_KEY, reducer),
          EffectsModule.forFeature([HedefFiiliGrafikEffects]),
        ],
        providers: [HedefFiiliGrafikFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(HedefFiiliGrafikFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async (done) => {
      try {
        let list = await readFirst(facade.hedefFiiliGrafik$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.init();

        list = await readFirst(facade.hedefFiiliGrafik$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadHedefFiiliGrafikSuccess` to manually update list
     */
    it('allHedefFiiliGrafik$ should return the loaded list; and loaded flag == true', async (done) => {
      try {
        let list = await readFirst(facade.hedefFiiliGrafik$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          HedefFiiliGrafikActions.loadHedefFiiliGrafikSuccess({
            hedefFiiliGrafik: [createHedefFiiliGrafikEntity('AAA'), createHedefFiiliGrafikEntity('BBB')],
          })
        );

        list = await readFirst(facade.hedefFiiliGrafik$);
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
