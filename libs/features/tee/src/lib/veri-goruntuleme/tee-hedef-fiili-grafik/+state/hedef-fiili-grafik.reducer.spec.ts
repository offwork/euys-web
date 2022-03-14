import { HedefFiiliGrafikEntity } from './hedef-fiili-grafik.models';
import * as HedefFiiliGrafikActions from './hedef-fiili-grafik.actions';
import { State, initialState, reducer } from './hedef-fiili-grafik.reducer';

describe('HedefFiiliGrafik Reducer', () => {
  const createHedefFiiliGrafikEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as HedefFiiliGrafikEntity);

  beforeEach(() => {});

  describe('valid HedefFiiliGrafik actions', () => {
    it('loadHedefFiiliGrafikSuccess should return set the list of known HedefFiiliGrafik', () => {
      const hedefFiiliGrafik = [
        createHedefFiiliGrafikEntity('PRODUCT-AAA'),
        createHedefFiiliGrafikEntity('PRODUCT-zzz'),
      ];
      const action = HedefFiiliGrafikActions.loadHedefFiiliGrafikSuccess({ hedefFiiliGrafik });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
