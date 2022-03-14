/**
 * Interface for the 'YillikUretimPlani' data
 */
// {"hatKodu": "692", "planton": 314000.0, "unite": "GALVANİZLEME HATTI-2", "ay": 13, "yil": 2021},
export interface YillikUretimPlaniItem {
  id: string | number; // Primary ID
  hatKodu: string;
  planton: number;
  unite: string;
  ay: number;
  yil: number;
}

export interface YillikUretimPlaniTableItem {
  hatKodu: string;
  unite: string;
  aylikBilgiler: []; // index
}
