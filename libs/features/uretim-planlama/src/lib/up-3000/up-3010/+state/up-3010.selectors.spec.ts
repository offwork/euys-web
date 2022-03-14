import { Up3010Entity } from './up-3010.models';
import {
  up3010Adapter,
  Up3010PartialState,
  initialState,
} from './up-3010.reducer';
import * as Up3010Selectors from './up-3010.selectors';

describe('Up3010 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getUp3010Id = (it: Up3010Entity) => it.id;
  const createUp3010Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Up3010Entity);

  let state: Up3010PartialState;

  beforeEach(() => {
    state = {
      up3010: up3010Adapter.setAll(
        [
          createUp3010Entity('PRODUCT-AAA'),
          createUp3010Entity('PRODUCT-BBB'),
          createUp3010Entity('PRODUCT-CCC'),
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

  describe('Up3010 Selectors', () => {
    it('getAllUp3010() should return the list of Up3010', () => {
      const results = Up3010Selectors.getAllUp3010(state);
      const selId = getUp3010Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Up3010Selectors.getSelected(state) as Up3010Entity;
      const selId = getUp3010Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getUp3010Loaded() should return the current "loaded" status', () => {
      const result = Up3010Selectors.getUp3010Loaded(state);

      expect(result).toBe(true);
    });

    it('getUp3010Error() should return the current "error" state', () => {
      const result = Up3010Selectors.getUp3010Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
