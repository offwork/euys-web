import { Up3030Entity } from './up-3030.models';
import {
  up3030Adapter,
  Up3030PartialState,
  initialState,
} from './up-3030.reducer';
import * as Up3030Selectors from './up-3030.selectors';

describe('Up3030 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getUp3030Id = (it: Up3030Entity) => it.id;
  const createUp3030Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Up3030Entity);

  let state: Up3030PartialState;

  beforeEach(() => {
    state = {
      up3030: up3030Adapter.setAll(
        [
          createUp3030Entity('PRODUCT-AAA'),
          createUp3030Entity('PRODUCT-BBB'),
          createUp3030Entity('PRODUCT-CCC'),
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

  describe('Up3030 Selectors', () => {
    it('getAllUp3030() should return the list of Up3030', () => {
      const results = Up3030Selectors.getAllUp3030(state);
      const selId = getUp3030Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Up3030Selectors.getSelected(state) as Up3030Entity;
      const selId = getUp3030Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getUp3030Loaded() should return the current "loaded" status', () => {
      const result = Up3030Selectors.getUp3030Loaded(state);

      expect(result).toBe(true);
    });

    it('getUp3030Error() should return the current "error" state', () => {
      const result = Up3030Selectors.getUp3030Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
