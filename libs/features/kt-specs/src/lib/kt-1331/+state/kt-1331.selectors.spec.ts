import { Kt1331Entity } from './kt-1331.models';
import {
  kt1331Adapter,
  Kt1331PartialState,
  initialState,
} from './kt-1331.reducer';
import * as Kt1331Selectors from './kt-1331.selectors';

describe('Kt1331 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1331Id = (it: Kt1331Entity) => it.id;
  const createKt1331Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1331Entity);

  let state: Kt1331PartialState;

  beforeEach(() => {
    state = {
      kt1331: kt1331Adapter.setAll(
        [
          createKt1331Entity('PRODUCT-AAA'),
          createKt1331Entity('PRODUCT-BBB'),
          createKt1331Entity('PRODUCT-CCC'),
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

  describe('Kt1331 Selectors', () => {
    it('getAllKt1331() should return the list of Kt1331', () => {
      const results = Kt1331Selectors.getAllKt1331(state);
      const selId = getKt1331Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1331Selectors.getSelected(state) as Kt1331Entity;
      const selId = getKt1331Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1331Loaded() should return the current "loaded" status', () => {
      const result = Kt1331Selectors.getKt1331Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1331Error() should return the current "error" state', () => {
      const result = Kt1331Selectors.getKt1331Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
