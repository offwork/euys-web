import { Up3230Entity } from './up-3230.models';
import {
  up3230Adapter,
  Up3230PartialState,
  initialState,
} from './up-3230.reducer';
import * as Up3230Selectors from './up-3230.selectors';

describe('Up3230 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getUp3230Id = (it: Up3230Entity) => it.id;
  const createUp3230Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Up3230Entity);

  let state: Up3230PartialState;

  beforeEach(() => {
    state = {
      up3230: up3230Adapter.setAll(
        [
          createUp3230Entity('PRODUCT-AAA'),
          createUp3230Entity('PRODUCT-BBB'),
          createUp3230Entity('PRODUCT-CCC'),
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

  describe('Up3230 Selectors', () => {
    it('getAllUp3230() should return the list of Up3230', () => {
      const results = Up3230Selectors.getAllUp3230(state);
      const selId = getUp3230Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Up3230Selectors.getSelected(state) as Up3230Entity;
      const selId = getUp3230Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getUp3230Loaded() should return the current "loaded" status', () => {
      const result = Up3230Selectors.getUp3230Loaded(state);

      expect(result).toBe(true);
    });

    it('getUp3230Error() should return the current "error" state', () => {
      const result = Up3230Selectors.getUp3230Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
