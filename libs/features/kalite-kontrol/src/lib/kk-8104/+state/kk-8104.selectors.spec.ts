import { Kk8104Entity } from './kk-8104.models';
import {
  kk8104Adapter,
  Kk8104PartialState,
  initialState,
} from './kk-8104.reducer';
import * as Kk8104Selectors from './kk-8104.selectors';

describe('Kk8104 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKk8104Id = (it: Kk8104Entity) => it.id;
  const createKk8104Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kk8104Entity);

  let state: Kk8104PartialState;

  beforeEach(() => {
    state = {
      kk8104: kk8104Adapter.setAll(
        [
          createKk8104Entity('PRODUCT-AAA'),
          createKk8104Entity('PRODUCT-BBB'),
          createKk8104Entity('PRODUCT-CCC'),
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

  describe('Kk8104 Selectors', () => {
    it('getAllKk8104() should return the list of Kk8104', () => {
      const results = Kk8104Selectors.getAllKk8104(state);
      const selId = getKk8104Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kk8104Selectors.getSelected(state) as Kk8104Entity;
      const selId = getKk8104Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKk8104Loaded() should return the current "loaded" status', () => {
      const result = Kk8104Selectors.getKk8104Loaded(state);

      expect(result).toBe(true);
    });

    it('getKk8104Error() should return the current "error" state', () => {
      const result = Kk8104Selectors.getKk8104Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
