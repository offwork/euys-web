import { Kt1364Entity } from './kt-1364.models';
import {
  kt1364Adapter,
  Kt1364PartialState,
  initialState,
} from './kt-1364.reducer';
import * as Kt1364Selectors from './kt-1364.selectors';

describe('Kt1364 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1364Id = (it: Kt1364Entity) => it.id;
  const createKt1364Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1364Entity);

  let state: Kt1364PartialState;

  beforeEach(() => {
    state = {
      kt1364: kt1364Adapter.setAll(
        [
          createKt1364Entity('PRODUCT-AAA'),
          createKt1364Entity('PRODUCT-BBB'),
          createKt1364Entity('PRODUCT-CCC'),
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

  describe('Kt1364 Selectors', () => {
    it('getAllKt1364() should return the list of Kt1364', () => {
      const results = Kt1364Selectors.getAllKt1364(state);
      const selId = getKt1364Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1364Selectors.getSelected(state) as Kt1364Entity;
      const selId = getKt1364Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1364Loaded() should return the current "loaded" status', () => {
      const result = Kt1364Selectors.getKt1364Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1364Error() should return the current "error" state', () => {
      const result = Kt1364Selectors.getKt1364Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
