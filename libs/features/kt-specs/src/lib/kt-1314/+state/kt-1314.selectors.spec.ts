import { Kt1314Entity } from './kt-1314.models';
import {
  kt1340Adapter,
  Kt1314PartialState,
  initialState,
} from './kt-1314.reducer';
import * as Kt1314Selectors from './kt-1314.selectors';

describe('Kt1314 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1314Id = (it: Kt1314Entity) => it.id;
  const createKt1314Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1314Entity);

  let state: Kt1314PartialState;

  beforeEach(() => {
    state = {
      kt1340: kt1340Adapter.setAll(
        [
          createKt1314Entity('PRODUCT-AAA'),
          createKt1314Entity('PRODUCT-BBB'),
          createKt1314Entity('PRODUCT-CCC'),
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

  describe('Kt1314 Selectors', () => {
    it('getAllKt1314() should return the list of Kt1314', () => {
      const results = Kt1314Selectors.getAllKt1314(state);
      const selId = getKt1314Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1314Selectors.getSelected(state) as Kt1314Entity;
      const selId = getKt1314Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1314Loaded() should return the current "loaded" status', () => {
      const result = Kt1314Selectors.getKt1314Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1314Error() should return the current "error" state', () => {
      const result = Kt1314Selectors.getKt1314Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
