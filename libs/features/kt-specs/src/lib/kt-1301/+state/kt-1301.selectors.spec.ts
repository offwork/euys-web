import { Kt1301Entity } from './kt-1301.models';
import {
  kt1301Adapter,
  Kt1301PartialState,
  initialState,
} from './kt-1301.reducer';
import * as Kt1301Selectors from './kt-1301.selectors';

describe('Kt1301 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1301Id = (it: Kt1301Entity) => it.id;
  const createKt1301Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1301Entity);

  let state: Kt1301PartialState;

  beforeEach(() => {
    state = {
      kt1301: kt1301Adapter.setAll(
        [
          createKt1301Entity('PRODUCT-AAA'),
          createKt1301Entity('PRODUCT-BBB'),
          createKt1301Entity('PRODUCT-CCC'),
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

  describe('Kt1301 Selectors', () => {
    it('getAllKt1301() should return the list of Kt1301', () => {
      const results = Kt1301Selectors.getAllKt1301(state);
      const selId = getKt1301Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1301Selectors.getSelected(state) as Kt1301Entity;
      const selId = getKt1301Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1301Loaded() should return the current "loaded" status', () => {
      const result = Kt1301Selectors.getKt1301Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1301Error() should return the current "error" state', () => {
      const result = Kt1301Selectors.getKt1301Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
