import { Kt1313Entity } from './kt-1313.models';
import {
  kt1313Adapter,
  Kt1313PartialState,
  initialState,
} from './kt-1313.reducer';
import * as Kt1313Selectors from './kt-1313.selectors';

describe('Kt1313 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1313Id = (it: Kt1313Entity) => it.id;
  const createKt1313Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1313Entity);

  let state: Kt1313PartialState;

  beforeEach(() => {
    state = {
      kt1313: kt1313Adapter.setAll(
        [
          createKt1313Entity('PRODUCT-AAA'),
          createKt1313Entity('PRODUCT-BBB'),
          createKt1313Entity('PRODUCT-CCC'),
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

  describe('Kt1313 Selectors', () => {
    it('getAllKt1313() should return the list of Kt1313', () => {
      const results = Kt1313Selectors.getAllKt1313(state);
      const selId = getKt1313Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1313Selectors.getSelected(state) as Kt1313Entity;
      const selId = getKt1313Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1313Loaded() should return the current "loaded" status', () => {
      const result = Kt1313Selectors.getKt1313Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1313Error() should return the current "error" state', () => {
      const result = Kt1313Selectors.getKt1313Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
