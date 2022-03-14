import { Pfdm3102Entity } from './pfdm-3102.models';
import {
  pfdm3102Adapter,
  Pfdm3102PartialState,
  initialState,
} from './pfdm-3102.reducer';
import * as Pfdm3102Selectors from './pfdm-3102.selectors';

describe('Pfdm3102 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getPfdm3102Id = (it: Pfdm3102Entity) => it.id;
  const createPfdm3102Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Pfdm3102Entity);

  let state: Pfdm3102PartialState;

  beforeEach(() => {
    state = {
      pfdm3102: pfdm3102Adapter.setAll(
        [
          createPfdm3102Entity('PRODUCT-AAA'),
          createPfdm3102Entity('PRODUCT-BBB'),
          createPfdm3102Entity('PRODUCT-CCC'),
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

  describe('Pfdm3102 Selectors', () => {
    it('getAllPfdm3102() should return the list of Pfdm3102', () => {
      const results = Pfdm3102Selectors.getAllPfdm3102(state);
      const selId = getPfdm3102Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Pfdm3102Selectors.getSelected(state) as Pfdm3102Entity;
      const selId = getPfdm3102Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getPfdm3102Loaded() should return the current "loaded" status', () => {
      const result = Pfdm3102Selectors.getPfdm3102Loaded(state);

      expect(result).toBe(true);
    });

    it('getPfdm3102Error() should return the current "error" state', () => {
      const result = Pfdm3102Selectors.getPfdm3102Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
