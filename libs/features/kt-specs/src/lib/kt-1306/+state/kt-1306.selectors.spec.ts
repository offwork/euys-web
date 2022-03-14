import { Kt1306Entity } from './kt-1306.models';
import {
  kt1340Adapter,
  Kt1306PartialState,
  initialState,
} from './kt-1306.reducer';
import * as Kt1306Selectors from './kt-1306.selectors';

describe('Kt1306 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1306Id = (it: Kt1306Entity) => it.id;
  const createKt1306Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1306Entity);

  let state: Kt1306PartialState;

  beforeEach(() => {
    state = {
      kt1340: kt1340Adapter.setAll(
        [
          createKt1306Entity('PRODUCT-AAA'),
          createKt1306Entity('PRODUCT-BBB'),
          createKt1306Entity('PRODUCT-CCC'),
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

  describe('Kt1306 Selectors', () => {
    it('getAllKt1306() should return the list of Kt1306', () => {
      const results = Kt1306Selectors.getAllKt1306(state);
      const selId = getKt1306Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1306Selectors.getSelected(state) as Kt1306Entity;
      const selId = getKt1306Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1306Loaded() should return the current "loaded" status', () => {
      const result = Kt1306Selectors.getKt1306Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1306Error() should return the current "error" state', () => {
      const result = Kt1306Selectors.getKt1306Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
