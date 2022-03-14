import { Up3003Entity } from './up-3003.models';
import {
  up3003Adapter,
  Up3003PartialState,
  initialState,
} from './up-3003.reducer';
import * as Up3003Selectors from './up-3003.selectors';

describe('Up3003 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getUp3003Id = (it: Up3003Entity) => it.id;
  const createUp3003Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Up3003Entity);

  let state: Up3003PartialState;

  beforeEach(() => {
    state = {
      up3003: up3003Adapter.setAll(
        [
          createUp3003Entity('PRODUCT-AAA'),
          createUp3003Entity('PRODUCT-BBB'),
          createUp3003Entity('PRODUCT-CCC'),
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

  describe('Up3003 Selectors', () => {
    it('getAllUp3003() should return the list of Up3003', () => {
      const results = Up3003Selectors.getAllUp3003(state);
      const selId = getUp3003Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Up3003Selectors.getSelected(state) as Up3003Entity;
      const selId = getUp3003Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getUp3003Loaded() should return the current "loaded" status', () => {
      const result = Up3003Selectors.getUp3003Loaded(state);

      expect(result).toBe(true);
    });

    it('getUp3003Error() should return the current "error" state', () => {
      const result = Up3003Selectors.getUp3003Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
