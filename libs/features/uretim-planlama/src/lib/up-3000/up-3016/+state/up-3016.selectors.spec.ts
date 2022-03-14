import { Up3016Entity } from './up-3016.models';
import {
  up3016Adapter,
  Up3016PartialState,
  initialState,
} from './up-3016.reducer';
import * as Up3016Selectors from './up-3016.selectors';

describe('Up3016 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getUp3016Id = (it: Up3016Entity) => it.id;
  const createUp3016Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Up3016Entity);

  let state: Up3016PartialState;

  beforeEach(() => {
    state = {
      up3016: up3016Adapter.setAll(
        [
          createUp3016Entity('PRODUCT-AAA'),
          createUp3016Entity('PRODUCT-BBB'),
          createUp3016Entity('PRODUCT-CCC'),
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

  describe('Up3016 Selectors', () => {
    it('getAllUp3016() should return the list of Up3016', () => {
      const results = Up3016Selectors.getAllUp3016(state);
      const selId = getUp3016Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Up3016Selectors.getSelected(state) as Up3016Entity;
      const selId = getUp3016Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getUp3016Loaded() should return the current "loaded" status', () => {
      const result = Up3016Selectors.getUp3016Loaded(state);

      expect(result).toBe(true);
    });

    it('getUp3016Error() should return the current "error" state', () => {
      const result = Up3016Selectors.getUp3016Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
