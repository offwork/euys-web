import { HSMUretimDegerleri } from '@euys/api-interfaces';

export * from './hsm2';
export * from './hsm1';

export function getMpcMinMax(rowData: HSMUretimDegerleri): number[] {
  return [rowData.mpcMin || undefined, rowData.mpcMax || undefined];
}

export function isOutOfBounds(
  value: number,
  min: number,
  max: number
): boolean {
  return value && (value < min || value > max);
}
