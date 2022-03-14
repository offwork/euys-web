import { Pfdm3104Entity } from './pfdm-3104.models';
import {
  pfdm3104Adapter,
  Pfdm3104PartialState,
  initialState,
} from './pfdm-3104.reducer';
import * as Pfdm3104Selectors from './pfdm-3104.selectors';

describe('Pfdm3104 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getPfdm3104Id = (it: Pfdm3104Entity) => it.id;
  const createPfdm3104Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Pfdm3104Entity);

  let state: Pfdm3104PartialState;

  beforeEach(() => {
    state = {
      pfdm3104: pfdm3104Adapter.setAll(
        [
          createPfdm3104Entity('PRODUCT-AAA'),
          createPfdm3104Entity('PRODUCT-BBB'),
          createPfdm3104Entity('PRODUCT-CCC'),
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

  describe('Pfdm3104 Selectors', () => {
    it('getAllPfdm3104() should return the list of Pfdm3104', () => {
      const results = Pfdm3104Selectors.getAllPfdm3104(state);
      const selId = getPfdm3104Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Pfdm3104Selectors.getSelected(state) as Pfdm3104Entity;
      const selId = getPfdm3104Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getPfdm3104Loaded() should return the current "loaded" status', () => {
      const result = Pfdm3104Selectors.getPfdm3104Loaded(state);

      expect(result).toBe(true);
    });

    it('getPfdm3104Error() should return the current "error" state', () => {
      const result = Pfdm3104Selectors.getPfdm3104Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
