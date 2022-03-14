import { Kt1340Entity } from './kt-1340.models';
import {
  kt1340Adapter,
  Kt1340PartialState,
  initialState,
} from './kt-1340.reducer';
import * as Kt1340Selectors from './kt-1340.selectors';

describe('Kt1340 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1340Id = (it: Kt1340Entity) => it.id;
  const createKt1340Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1340Entity);

  let state: Kt1340PartialState;

  beforeEach(() => {
    state = {
      kt1340: kt1340Adapter.setAll(
        [
          createKt1340Entity('PRODUCT-AAA'),
          createKt1340Entity('PRODUCT-BBB'),
          createKt1340Entity('PRODUCT-CCC'),
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

  describe('Kt1340 Selectors', () => {
    it('getAllKt1340() should return the list of Kt1340', () => {
      const results = Kt1340Selectors.getAllKt1340(state);
      const selId = getKt1340Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1340Selectors.getSelected(state) as Kt1340Entity;
      const selId = getKt1340Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1340Loaded() should return the current "loaded" status', () => {
      const result = Kt1340Selectors.getKt1340Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1340Error() should return the current "error" state', () => {
      const result = Kt1340Selectors.getKt1340Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
