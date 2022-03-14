import { Ut6112Entity } from './ut-6112.models';
import {
  ut6112Adapter,
  Ut6112PartialState,
  initialState,
} from './ut-6112.reducer';
import * as Ut6112Selectors from './ut-6112.selectors';

describe('Ut6112 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getUt6112Id = (it: Ut6112Entity) => it.id;
  const createUt6112Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Ut6112Entity);

  let state: Ut6112PartialState;

  beforeEach(() => {
    state = {
      ut6112: ut6112Adapter.setAll(
        [
          createUt6112Entity('PRODUCT-AAA'),
          createUt6112Entity('PRODUCT-BBB'),
          createUt6112Entity('PRODUCT-CCC'),
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

  describe('Ut6112 Selectors', () => {
    it('getAllUt6112() should return the list of Ut6112', () => {
      const results = Ut6112Selectors.getAllUt6112(state);
      const selId = getUt6112Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Ut6112Selectors.getSelected(state) as Ut6112Entity;
      const selId = getUt6112Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getUt6112Loaded() should return the current "loaded" status', () => {
      const result = Ut6112Selectors.getUt6112Loaded(state);

      expect(result).toBe(true);
    });

    it('getUt6112Error() should return the current "error" state', () => {
      const result = Ut6112Selectors.getUt6112Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
