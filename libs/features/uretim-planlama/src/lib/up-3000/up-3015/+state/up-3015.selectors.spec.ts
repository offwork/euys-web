import { Up3015Entity } from './up-3015.models';
import {
  up3015Adapter,
  Up3015PartialState,
  initialState,
} from './up-3015.reducer';
import * as Up3015Selectors from './up-3015.selectors';

describe('Up3015 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getUp3015Id = (it: Up3015Entity) => it.id;
  const createUp3015Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Up3015Entity);

  let state: Up3015PartialState;

  beforeEach(() => {
    state = {
      up3015: up3015Adapter.setAll(
        [
          createUp3015Entity('PRODUCT-AAA'),
          createUp3015Entity('PRODUCT-BBB'),
          createUp3015Entity('PRODUCT-CCC'),
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

  describe('Up3015 Selectors', () => {
    it('getAllUp3015() should return the list of Up3015', () => {
      const results = Up3015Selectors.getAllUp3015(state);
      const selId = getUp3015Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Up3015Selectors.getSelected(state) as Up3015Entity;
      const selId = getUp3015Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getUp3015Loaded() should return the current "loaded" status', () => {
      const result = Up3015Selectors.getUp3015Loaded(state);

      expect(result).toBe(true);
    });

    it('getUp3015Error() should return the current "error" state', () => {
      const result = Up3015Selectors.getUp3015Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
