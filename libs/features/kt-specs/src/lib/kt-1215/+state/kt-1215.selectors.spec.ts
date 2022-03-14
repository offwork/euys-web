import { Kt1215Entity } from './kt-1215.models';
import { kt1215Adapter, Kt1215PartialState, initialState } from './kt-1215.reducer';
import * as Kt1215Selectors from './kt-1215.selectors';

describe('Kt1215 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1215Id = (it: Kt1215Entity) => it.id;
  const createKt1215Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1215Entity);

  let state: Kt1215PartialState;

  beforeEach(() => {
    state = {
      kt1215: kt1215Adapter.setAll(
        [createKt1215Entity('PRODUCT-AAA'), createKt1215Entity('PRODUCT-BBB'), createKt1215Entity('PRODUCT-CCC')],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Kt1215 Selectors', () => {
    it('getAllKt1215() should return the list of Kt1215', () => {
      const results = Kt1215Selectors.getAllKt1215(state);
      const selId = getKt1215Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1215Selectors.getSelected(state) as Kt1215Entity;
      const selId = getKt1215Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1215Loaded() should return the current "loaded" status', () => {
      const result = Kt1215Selectors.getKt1215Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1215Error() should return the current "error" state', () => {
      const result = Kt1215Selectors.getKt1215Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
