import { Kt1330Entity } from './kt-1330.models';
import {
  kt1331Adapter,
  Kt1330PartialState,
  initialState,
} from './kt-1330.reducer';
import * as Kt1330Selectors from './kt-1330.selectors';

describe('Kt1330 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1330Id = (it: Kt1330Entity) => it.id;
  const createKt1330Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1330Entity);

  let state: Kt1330PartialState;

  beforeEach(() => {
    state = {
      kt1331: kt1331Adapter.setAll(
        [
          createKt1330Entity('PRODUCT-AAA'),
          createKt1330Entity('PRODUCT-BBB'),
          createKt1330Entity('PRODUCT-CCC'),
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

  describe('Kt1330 Selectors', () => {
    it('getAllKt1330() should return the list of Kt1330', () => {
      const results = Kt1330Selectors.getAllKt1330(state);
      const selId = getKt1330Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1330Selectors.getSelected(state) as Kt1330Entity;
      const selId = getKt1330Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1330Loaded() should return the current "loaded" status', () => {
      const result = Kt1330Selectors.getKt1330Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1330Error() should return the current "error" state', () => {
      const result = Kt1330Selectors.getKt1330Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
