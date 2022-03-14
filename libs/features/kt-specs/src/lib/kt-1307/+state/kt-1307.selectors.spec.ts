import { Kt1307Entity } from './kt-1307.models';
import {
  kt1307Adapter,
  Kt1307PartialState,
  initialState,
} from './kt-1307.reducer';
import * as Kt1307Selectors from './kt-1307.selectors';

describe('Kt1307 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1307Id = (it: Kt1307Entity) => it.id;
  const createKt1307Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1307Entity);

  let state: Kt1307PartialState;

  beforeEach(() => {
    state = {
      kt1307: kt1307Adapter.setAll(
        [
          createKt1307Entity('PRODUCT-AAA'),
          createKt1307Entity('PRODUCT-BBB'),
          createKt1307Entity('PRODUCT-CCC'),
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

  describe('Kt1307 Selectors', () => {
    it('getAllKt1307() should return the list of Kt1307', () => {
      const results = Kt1307Selectors.getAllKt1307(state);
      const selId = getKt1307Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1307Selectors.getSelected(state) as Kt1307Entity;
      const selId = getKt1307Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1307Loaded() should return the current "loaded" status', () => {
      const result = Kt1307Selectors.getKt1307Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1307Error() should return the current "error" state', () => {
      const result = Kt1307Selectors.getKt1307Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
