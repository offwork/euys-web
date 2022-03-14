export class KtDurum {
  label: string;
  value: string;

  constructor(label: string, value: string) {
    this.label = label;
    this.value = value;
  }
  static AKTIF = new KtDurum('Aktif', 'A');
  static TASLAK = new KtDurum('Taslak', 'T');
  static PASIF = new KtDurum('Pasif', 'P');
}

export const KtAktifTaslakList = [KtDurum.AKTIF, KtDurum.TASLAK];
