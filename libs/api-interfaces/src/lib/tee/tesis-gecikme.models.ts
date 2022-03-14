import { Gecikme } from './gecikme';

export interface TesisGecikme {
  sira?: number;
  tip?: string;
  tesisAd: string;
  detay: Gecikme[];
  tesisTip?: 'soguk1' | 'ikmal' | 'soguk2';
}

export interface AylikGecikmeAnalizi {
  aylik: TesisGecikme[];
  yillik: TesisGecikme[];
}
