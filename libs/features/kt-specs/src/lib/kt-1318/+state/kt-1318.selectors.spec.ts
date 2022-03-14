import { Kt1318Entity } from './kt-1318.models';
import {
  kt1318Adapter,
  Kt1318PartialState,
  initialState,
} from './kt-1318.reducer';
import * as Kt1318Selectors from './kt-1318.selectors';

describe('Kt1318 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1318Id = (it: Kt1318Entity) => it.id;
  const createKt1318Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1318Entity);

  let state: Kt1318PartialState;

  beforeEach(() => {
    state = {
      kt1318: kt1318Adapter.setAll(
        [
          createKt1318Entity('PRODUCT-AAA'),
          createKt1318Entity('PRODUCT-BBB'),
          createKt1318Entity('PRODUCT-CCC'),
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

  describe('Kt1318 Selectors', () => {
    it('getAllKt1318() should return the list of Kt1318', () => {
      const results = Kt1318Selectors.getAllKt1318(state);
      const selId = getKt1318Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1318Selectors.getSelected(state) as Kt1318Entity;
      const selId = getKt1318Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1318Loaded() should return the current "loaded" status', () => {
      const result = Kt1318Selectors.getKt1318Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1318Error() should return the current "error" state', () => {
      const result = Kt1318Selectors.getKt1318Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
