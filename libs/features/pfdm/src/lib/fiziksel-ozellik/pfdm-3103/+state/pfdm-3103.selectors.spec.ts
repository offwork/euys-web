import { Pfdm3103Entity } from './pfdm-3103.models';
import {
  pfdm3103Adapter,
  Pfdm3103PartialState,
  initialState,
} from './pfdm-3103.reducer';
import * as Pfdm3103Selectors from './pfdm-3103.selectors';

describe('Pfdm3103 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getPfdm3103Id = (it: Pfdm3103Entity) => it.id;
  const createPfdm3103Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Pfdm3103Entity);

  let state: Pfdm3103PartialState;

  beforeEach(() => {
    state = {
      pfdm3103: pfdm3103Adapter.setAll(
        [
          createPfdm3103Entity('PRODUCT-AAA'),
          createPfdm3103Entity('PRODUCT-BBB'),
          createPfdm3103Entity('PRODUCT-CCC'),
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

  describe('Pfdm3103 Selectors', () => {
    it('getAllPfdm3103() should return the list of Pfdm3103', () => {
      const results = Pfdm3103Selectors.getAllPfdm3103(state);
      const selId = getPfdm3103Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Pfdm3103Selectors.getSelected(state) as Pfdm3103Entity;
      const selId = getPfdm3103Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getPfdm3103Loaded() should return the current "loaded" status', () => {
      const result = Pfdm3103Selectors.getPfdm3103Loaded(state);

      expect(result).toBe(true);
    });

    it('getPfdm3103Error() should return the current "error" state', () => {
      const result = Pfdm3103Selectors.getPfdm3103Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
