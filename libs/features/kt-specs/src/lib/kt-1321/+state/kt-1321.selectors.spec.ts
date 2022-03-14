import { Kt1321Entity } from './kt-1321.models';
import {
  kt1340Adapter,
  Kt1321PartialState,
  initialState,
} from './kt-1321.reducer';
import * as Kt1321Selectors from './kt-1321.selectors';

describe('Kt1321 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1321Id = (it: Kt1321Entity) => it.id;
  const createKt1321Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1321Entity);

  let state: Kt1321PartialState;

  beforeEach(() => {
    state = {
      kt1340: kt1340Adapter.setAll(
        [
          createKt1321Entity('PRODUCT-AAA'),
          createKt1321Entity('PRODUCT-BBB'),
          createKt1321Entity('PRODUCT-CCC'),
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

  describe('Kt1321 Selectors', () => {
    it('getAllKt1321() should return the list of Kt1321', () => {
      const results = Kt1321Selectors.getAllKt1321(state);
      const selId = getKt1321Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1321Selectors.getSelected(state) as Kt1321Entity;
      const selId = getKt1321Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1321Loaded() should return the current "loaded" status', () => {
      const result = Kt1321Selectors.getKt1321Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1321Error() should return the current "error" state', () => {
      const result = Kt1321Selectors.getKt1321Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
