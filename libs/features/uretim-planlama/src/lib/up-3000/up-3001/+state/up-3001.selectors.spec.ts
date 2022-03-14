import { Up3001Entity } from './up-3001.models';
import {
  Up3001Adapter,
  Up3001PartialState,
  initialState,
} from './up-3001.reducer';
import * as Up3001Selectors from './up-3001.selectors';

describe('Up3001 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getUp3001Id = (it: Up3001Entity) => it.id;
  const createUp3001Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Up3001Entity);

  let state: Up3001PartialState;

  beforeEach(() => {
    state = {
      Up3001: Up3001Adapter.setAll(
        [
          createUp3001Entity('PRODUCT-AAA'),
          createUp3001Entity('PRODUCT-BBB'),
          createUp3001Entity('PRODUCT-CCC'),
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

  describe('Up3001 Selectors', () => {
    it('getAllUp3001() should return the list of Up3001', () => {
      const results = Up3001Selectors.getAllUp3001(state);
      const selId = getUp3001Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Up3001Selectors.getSelected(state) as Up3001Entity;
      const selId = getUp3001Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getUp3001Loaded() should return the current "loaded" status', () => {
      const result = Up3001Selectors.getUp3001Loaded(state);

      expect(result).toBe(true);
    });

    it('getUp3001Error() should return the current "error" state', () => {
      const result = Up3001Selectors.getUp3001Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
