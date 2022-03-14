import { ImalatLotEntity } from './imalat-lot.models';
import {
  imalatLotAdapter,
  ImalatLotPartialState,
  initialState,
} from './imalat-lot.reducer';
import * as ImalatLotSelectors from './imalat-lot.selectors';

describe('ImalatLot Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getImalatLotId = (it: ImalatLotEntity) => it.id;
  const createImalatLotEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as ImalatLotEntity);

  let state: ImalatLotPartialState;

  beforeEach(() => {
    state = {
      imalatLot: imalatLotAdapter.setAll(
        [
          createImalatLotEntity('PRODUCT-AAA'),
          createImalatLotEntity('PRODUCT-BBB'),
          createImalatLotEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('ImalatLot Selectors', () => {
    it('getAllImalatLot() should return the list of ImalatLot', () => {
      const results = ImalatLotSelectors.getAllImalatLot(state);
      const selId = getImalatLotId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = ImalatLotSelectors.getSelected(state) as ImalatLotEntity;
      const selId = getImalatLotId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getImalatLotLoaded() should return the current "loaded" status', () => {
      const result = ImalatLotSelectors.getImalatLotLoaded(state);

      expect(result).toBe(true);
    });

    it('getImalatLotError() should return the current "error" state', () => {
      const result = ImalatLotSelectors.getImalatLotError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
