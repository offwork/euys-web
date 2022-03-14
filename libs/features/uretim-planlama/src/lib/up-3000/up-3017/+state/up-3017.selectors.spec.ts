import { Up3017Entity } from './up-3017.models';
import {
  up3017Adapter,
  Up3017PartialState,
  initialState,
} from './up-3017.reducer';
import * as Up3017Selectors from './up-3017.selectors';

describe('Up3017 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getUp3017Id = (it: Up3017Entity) => it.id;
  const createUp3017Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Up3017Entity);

  let state: Up3017PartialState;

  beforeEach(() => {
    state = {
      up3017: up3017Adapter.setAll(
        [
          createUp3017Entity('PRODUCT-AAA'),
          createUp3017Entity('PRODUCT-BBB'),
          createUp3017Entity('PRODUCT-CCC'),
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

  describe('Up3017 Selectors', () => {
    it('getAllUp3017() should return the list of Up3017', () => {
      const results = Up3017Selectors.getAllUp3017(state);
      const selId = getUp3017Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Up3017Selectors.getSelected(state) as Up3017Entity;
      const selId = getUp3017Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getUp3017Loaded() should return the current "loaded" status', () => {
      const result = Up3017Selectors.getUp3017Loaded(state);

      expect(result).toBe(true);
    });

    it('getUp3017Error() should return the current "error" state', () => {
      const result = Up3017Selectors.getUp3017Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
