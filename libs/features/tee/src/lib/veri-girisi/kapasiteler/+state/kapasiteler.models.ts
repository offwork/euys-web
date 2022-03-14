export interface Kapasiteler<T> {
  [key: string]: T[];
}

export interface Kapasite {
  idx: string;
  yil: string;
  kokKapasite: number;
  sinterKapasite: number;
  yf1Kapasite: number;
  yf2Kapasite: number;
  celikhaneKapasite: number;
  surekli1Kapasite: number;
  surekli2Kapasite: number;
  surekli3Kapasite: number;
  surekli4Kapasite: number;
  serit1Kapasite: number;
  levhaKapasite: number;
  serit2Kapasite: number;
  asitleme2Kapasite: number;
  asitleme3Kapasite: number;
  tandemKapasite: number;
  temizlemeKapasite: number;
  tavlamaKapasite: number;
  temper1Kapasite: number;
  temper2Kapasite: number;
  tincalKapasite: number;
  tenekeKapasite: number;
  tnkMksKapasite: number;
  sckmakas1Kapasite: number;
  bobhazirKapasite: number;
  cptKapasite: number;
  calKapasite: number;
  cgl1Kapasite: number;
  cgl2Kapasite: number;
  irslKapasite: number;
  etag: string;
}

export const lines = [
  'Kok',
  'Sinter',
  'Yüksek Fırın-1',
  'Yüksek Fırın-2',
  'Çelikhane',
  'Sürekli Dökümler 1',
  'Sürekli Dökümler 2',
  'Sürekli Dökümler 3',
  'Sürekli Dökümler 4',
  '1. Şerit Hadde',
  'Levha',
  '2. Şerit Hadde',
  '2. Asitleme',
  '3. Asitleme',
  'Tandem',
  'Temizleme',
  'Tavlama',
  '1. Temper',
  '2. Temper',
  'Tincal',
  'Teneke',
  'Teneke Makası',
  '2. Sıcak Makas',
  'Bobin Hazırlama',
  'CPT Hattı',
  'CAL Hattı',
  'CGL-1',
  'CGL-2',
  'IRSL',
];
