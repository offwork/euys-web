import { Up3231Entity } from './up-3231.models';
import {
  up3231Adapter,
  Up3231PartialState,
  initialState,
} from './up-3231.reducer';
import * as Up3231Selectors from './up-3231.selectors';

describe('Up3231 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getUp3231Id = (it: Up3231Entity) => it.id;
  const createUp3231Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Up3231Entity);

  let state: Up3231PartialState;

  beforeEach(() => {
    state = {
      up3231: up3231Adapter.setAll(
        [
          createUp3231Entity('PRODUCT-AAA'),
          createUp3231Entity('PRODUCT-BBB'),
          createUp3231Entity('PRODUCT-CCC'),
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

  describe('Up3231 Selectors', () => {
    it('getAllUp3231() should return the list of Up3231', () => {
      const results = Up3231Selectors.getAllUp3231(state);
      const selId = getUp3231Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Up3231Selectors.getSelected(state) as Up3231Entity;
      const selId = getUp3231Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getUp3231Loaded() should return the current "loaded" status', () => {
      const result = Up3231Selectors.getUp3231Loaded(state);

      expect(result).toBe(true);
    });

    it('getUp3231Error() should return the current "error" state', () => {
      const result = Up3231Selectors.getUp3231Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
