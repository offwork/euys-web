import { Kt1260Entity } from './kt-1260.models';
import {
  kt1260Adapter,
  Kt1260PartialState,
  initialState,
} from './kt-1260.reducer';
import * as Kt1260Selectors from './kt-1260.selectors';

describe('Kt1260 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1260Id = (it: Kt1260Entity) => it.id;
  const createKt1260Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1260Entity);

  let state: Kt1260PartialState;

  beforeEach(() => {
    state = {
      kt1260: kt1260Adapter.setAll(
        [
          createKt1260Entity('PRODUCT-AAA'),
          createKt1260Entity('PRODUCT-BBB'),
          createKt1260Entity('PRODUCT-CCC'),
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

  describe('Kt1260 Selectors', () => {
    it('getAllKt1260() should return the list of Kt1260', () => {
      const results = Kt1260Selectors.getAllKt1260(state);
      const selId = getKt1260Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1260Selectors.getSelected(state) as Kt1260Entity;
      const selId = getKt1260Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1260Loaded() should return the current "loaded" status', () => {
      const result = Kt1260Selectors.getKt1260Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1260Error() should return the current "error" state', () => {
      const result = Kt1260Selectors.getKt1260Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
