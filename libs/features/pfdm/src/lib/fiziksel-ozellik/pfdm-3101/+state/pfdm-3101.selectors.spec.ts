import { Pfdm3101Entity } from './pfdm-3101.models';
import {
  pfdm3101Adapter,
  Pfdm3101PartialState,
  initialState,
} from './pfdm-3101.reducer';
import * as Pfdm3101Selectors from './pfdm-3101.selectors';

describe('Pfdm3101 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getPfdm3101Id = (it: Pfdm3101Entity) => it.id;
  const createPfdm3101Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Pfdm3101Entity);

  let state: Pfdm3101PartialState;

  beforeEach(() => {
    state = {
      pfdm3101: pfdm3101Adapter.setAll(
        [
          createPfdm3101Entity('PRODUCT-AAA'),
          createPfdm3101Entity('PRODUCT-BBB'),
          createPfdm3101Entity('PRODUCT-CCC'),
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

  describe('Pfdm3101 Selectors', () => {
    it('getAllPfdm3101() should return the list of Pfdm3101', () => {
      const results = Pfdm3101Selectors.getAllPfdm3101(state);
      const selId = getPfdm3101Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Pfdm3101Selectors.getSelected(state) as Pfdm3101Entity;
      const selId = getPfdm3101Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getPfdm3101Loaded() should return the current "loaded" status', () => {
      const result = Pfdm3101Selectors.getPfdm3101Loaded(state);

      expect(result).toBe(true);
    });

    it('getPfdm3101Error() should return the current "error" state', () => {
      const result = Pfdm3101Selectors.getPfdm3101Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
