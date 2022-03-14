import { Up3005Entity } from './up-3005.models';
import {
  up3005Adapter,
  Up3005PartialState,
  initialState,
} from './up-3005.reducer';
import * as Up3005Selectors from './up-3005.selectors';

describe('Up3005 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getUp3005Id = (it: Up3005Entity) => it.id;
  const createUp3005Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Up3005Entity);

  let state: Up3005PartialState;

  beforeEach(() => {
    state = {
      up3005: up3005Adapter.setAll(
        [
          createUp3005Entity('PRODUCT-AAA'),
          createUp3005Entity('PRODUCT-BBB'),
          createUp3005Entity('PRODUCT-CCC'),
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

  describe('Up3005 Selectors', () => {
    it('getAllUp3005() should return the list of Up3005', () => {
      const results = Up3005Selectors.getAllUp3005(state);
      const selId = getUp3005Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Up3005Selectors.getSelected(state) as Up3005Entity;
      const selId = getUp3005Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getUp3005Loaded() should return the current "loaded" status', () => {
      const result = Up3005Selectors.getUp3005Loaded(state);

      expect(result).toBe(true);
    });

    it('getUp3005Error() should return the current "error" state', () => {
      const result = Up3005Selectors.getUp3005Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
