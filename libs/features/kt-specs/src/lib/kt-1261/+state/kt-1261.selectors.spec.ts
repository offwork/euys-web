import { Kt1261Entity } from './kt-1261.models';
import {
  kt1261Adapter,
  Kt1261PartialState,
  initialState,
} from './kt-1261.reducer';
import * as Kt1261Selectors from './kt-1261.selectors';

describe('Kt1261 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1261Id = (it: Kt1261Entity) => it.id;
  const createKt1261Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1261Entity);

  let state: Kt1261PartialState;

  beforeEach(() => {
    state = {
      kt1261: kt1261Adapter.setAll(
        [
          createKt1261Entity('PRODUCT-AAA'),
          createKt1261Entity('PRODUCT-BBB'),
          createKt1261Entity('PRODUCT-CCC'),
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

  describe('Kt1261 Selectors', () => {
    it('getAllKt1261() should return the list of Kt1261', () => {
      const results = Kt1261Selectors.getAllKt1261(state);
      const selId = getKt1261Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1261Selectors.getSelected(state) as Kt1261Entity;
      const selId = getKt1261Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1261Loaded() should return the current "loaded" status', () => {
      const result = Kt1261Selectors.getKt1261Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1261Error() should return the current "error" state', () => {
      const result = Kt1261Selectors.getKt1261Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
