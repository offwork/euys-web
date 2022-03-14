import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as ImalatLotActions from './imalat-lot.actions';
import { ImalatLotEffects } from './imalat-lot.effects';
import { ImalatLotFacade } from './imalat-lot.facade';
import { ImalatLotEntity } from './imalat-lot.models';
import {
  IMALAT_LOT_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './imalat-lot.reducer';
import * as ImalatLotSelectors from './imalat-lot.selectors';

interface TestSchema {
  imalatLot: State;
}

describe('ImalatLotFacade', () => {
  let facade: ImalatLotFacade;
  let store: Store<TestSchema>;
  const createImalatLotEntity = (id: string, name = ''): ImalatLotEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(IMALAT_LOT_FEATURE_KEY, reducer),
          EffectsModule.forFeature([ImalatLotEffects]),
        ],
        providers: [ImalatLotFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(ImalatLotFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allImalatLot$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allImalatLot$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadImalatLotSuccess` to manually update list
     */
    it('allImalatLot$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allImalatLot$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        ImalatLotActions.loadImalatLotSuccess({
          imalatLot: [
            createImalatLotEntity('AAA'),
            createImalatLotEntity('BBB'),
          ],
        })
      );

      list = await readFirst(facade.allImalatLot$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
