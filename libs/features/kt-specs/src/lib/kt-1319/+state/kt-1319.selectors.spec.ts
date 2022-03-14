import { Kt1319Entity } from './kt-1319.models';
import {
  kt1340Adapter,
  Kt1319PartialState,
  initialState,
} from './kt-1319.reducer';
import * as Kt1319Selectors from './kt-1319.selectors';

describe('Kt1319 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1319Id = (it: Kt1319Entity) => it.id;
  const createKt1319Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1319Entity);

  let state: Kt1319PartialState;

  beforeEach(() => {
    state = {
      kt1340: kt1340Adapter.setAll(
        [
          createKt1319Entity('PRODUCT-AAA'),
          createKt1319Entity('PRODUCT-BBB'),
          createKt1319Entity('PRODUCT-CCC'),
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

  describe('Kt1319 Selectors', () => {
    it('getAllKt1319() should return the list of Kt1319', () => {
      const results = Kt1319Selectors.getAllKt1319(state);
      const selId = getKt1319Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1319Selectors.getSelected(state) as Kt1319Entity;
      const selId = getKt1319Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1319Loaded() should return the current "loaded" status', () => {
      const result = Kt1319Selectors.getKt1319Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1319Error() should return the current "error" state', () => {
      const result = Kt1319Selectors.getKt1319Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
