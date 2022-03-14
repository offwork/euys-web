export interface HedefFiiliDegerlerModel {
  gecenYilaAitFiiliOranlar?: HedefFiiliDegerlerDTO;
  buYilaAitHedefDegerleri?: HedefFiiliDegerlerDTO;
  buYilaAitFiiliOranlar?: HedefFiiliDegerlerDTO;
  aylikFiiliOranlar?: HedefFiiliDegerlerDTO[];
}

export interface HedefFiiliDegerlerDTO {
  yil?: number;
  ay?: number;
  hatKodu?: string;
  hatUzunAdi?: string;
  tee?: number; // TEE %
  nco?: number; // Net Çalışma Oranı
  po?: number; // Performans Oranı
  ko?: number; // Kalite Oranı
}
