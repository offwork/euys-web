import { Isgucu } from '@euys/api-interfaces';

export class ManpowerInputEvent {
  value: string;
  field: string; // TODO: keyof Isgucu --> keyof ile yapilmak istenen sey nedir?
  manpower?: Isgucu;
  month: string;
  year: string;
}
