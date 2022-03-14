export interface Mamul {
  mamulAdi: string;
  mamulNo: string;
  mamulGrupNo: number;
  mamulGrupAdi: string;
  urunTipi: {
    id: number;
    value: string;
    sKapasite: boolean;
  };
  urunAnaGrupNo: string;
  urunAnaGrupAdi: string;
}

export const data: Mamul[] = [
  {
    mamulAdi: "BCKK",
    mamulNo: "0009",
    mamulGrupNo: 12,
    mamulGrupAdi: "BCKK-TRKK",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "B",
    urunAnaGrupAdi: "Sıcak"
  },
  {
    mamulAdi: "BPTNR",
    mamulNo: "0321",
    mamulGrupNo: 5,
    mamulGrupAdi: "ICCR",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "C",
    urunAnaGrupAdi: "Soğuk"
  },
  {
    mamulAdi: "BRKK",
    mamulNo: "0005",
    mamulGrupNo: 12,
    mamulGrupAdi: "BCKK-TRKK",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "B",
    urunAnaGrupAdi: "Sıcak"
  },
  {
    mamulAdi: "BRP",
    mamulNo: "0104",
    mamulGrupNo: 7,
    mamulGrupAdi: "RP-TRP-RPK",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "A",
    urunAnaGrupAdi: "Asitli"
  },
  {
    mamulAdi: "BRPKK",
    mamulNo: "0103",
    mamulGrupNo: 7,
    mamulGrupAdi: "RP-TRP-RPK",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "A",
    urunAnaGrupAdi: "Asitli"
  },
  {
    mamulAdi: "CCR",
    mamulNo: "0314",
    mamulGrupNo: 1,
    mamulGrupAdi: "CCR",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "C",
    urunAnaGrupAdi: "Soğuk"
  },
  {
    mamulAdi: "CCRB",
    mamulNo: "0322",
    mamulGrupNo: 1,
    mamulGrupAdi: "CCR",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "C",
    urunAnaGrupAdi: "Soğuk"
  },
  {
    mamulAdi: "CCRD",
    mamulNo: "0317",
    mamulGrupNo: 3,
    mamulGrupAdi: "SOGUKDILME",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "C",
    urunAnaGrupAdi: "Soğuk"
  },
  {
    mamulAdi: "CCRDS",
    mamulNo: "0319",
    mamulGrupNo: 4,
    mamulGrupAdi: "CCRS-CRS",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "C",
    urunAnaGrupAdi: "Soğuk"
  },
  {
    mamulAdi: "CCRF",
    mamulNo: "0312",
    mamulGrupNo: 2,
    mamulGrupAdi: "CCRF",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "C",
    urunAnaGrupAdi: "Soğuk"
  },
  {
    mamulAdi: "CCRFS",
    mamulNo: "0313",
    mamulGrupNo: 4,
    mamulGrupAdi: "CCRS-CRS",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "C",
    urunAnaGrupAdi: "Soğuk"
  },
  {
    mamulAdi: "CCRK",
    mamulNo: "0316",
    mamulGrupNo: 3,
    mamulGrupAdi: "SOGUKDILME",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "C",
    urunAnaGrupAdi: "Soğuk"
  },
  {
    mamulAdi: "CCRKB",
    mamulNo: "0323",
    mamulGrupNo: 3,
    mamulGrupAdi: "SOGUKDILME",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "C",
    urunAnaGrupAdi: "Soğuk"
  },
  {
    mamulAdi: "CCRS",
    mamulNo: "0315",
    mamulGrupNo: 4,
    mamulGrupAdi: "CCRS-CRS",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "C",
    urunAnaGrupAdi: "Soğuk"
  },
  {
    mamulAdi: "CCRSK",
    mamulNo: "0318",
    mamulGrupNo: 4,
    mamulGrupAdi: "CCRS-CRS",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "C",
    urunAnaGrupAdi: "Soğuk"
  },
  {
    mamulAdi: "CR",
    mamulNo: "0304",
    mamulGrupNo: 8,
    mamulGrupAdi: "CR-CRF",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "C",
    urunAnaGrupAdi: "Soğuk"
  },
  {
    mamulAdi: "CRD",
    mamulNo: "0307",
    mamulGrupNo: 3,
    mamulGrupAdi: "SOGUKDILME",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "C",
    urunAnaGrupAdi: "Soğuk"
  },
  {
    mamulAdi: "CRDS",
    mamulNo: "0309",
    mamulGrupNo: 4,
    mamulGrupAdi: "CCRS-CRS",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "C",
    urunAnaGrupAdi: "Soğuk"
  },
  {
    mamulAdi: "CRF",
    mamulNo: "0301",
    mamulGrupNo: 8,
    mamulGrupAdi: "CR-CRF",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "C",
    urunAnaGrupAdi: "Soğuk"
  },
  {
    mamulAdi: "CRFS",
    mamulNo: "0302",
    mamulGrupNo: 4,
    mamulGrupAdi: "CCRS-CRS",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "C",
    urunAnaGrupAdi: "Soğuk"
  },
  {
    mamulAdi: "CRK",
    mamulNo: "0306",
    mamulGrupNo: 3,
    mamulGrupAdi: "SOGUKDILME",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "C",
    urunAnaGrupAdi: "Soğuk"
  },
  {
    mamulAdi: "CRS",
    mamulNo: "0305",
    mamulGrupNo: 4,
    mamulGrupAdi: "CCRS-CRS",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "C",
    urunAnaGrupAdi: "Soğuk"
  },
  {
    mamulAdi: "CRSK",
    mamulNo: "0308",
    mamulGrupNo: 4,
    mamulGrupAdi: "CCRS-CRS",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "C",
    urunAnaGrupAdi: "Soğuk"
  },
  {
    mamulAdi: "DS",
    mamulNo: "0202",
    mamulGrupNo: 6,
    mamulGrupAdi: "L-LKK-DS",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "P",
    urunAnaGrupAdi: "Levha"
  },
  {
    mamulAdi: "DTFR",
    mamulNo: "0507",
    mamulGrupNo: 14,
    mamulGrupAdi: "TNR,TFR",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "T",
    urunAnaGrupAdi: "Teneke"
  },
  {
    mamulAdi: "DTFRS",
    mamulNo: "0508",
    mamulGrupNo: 15,
    mamulGrupAdi: "TNRS,TFRS",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "T",
    urunAnaGrupAdi: "Teneke"
  },
  {
    mamulAdi: "DTNR",
    mamulNo: "0505",
    mamulGrupNo: 14,
    mamulGrupAdi: "TNR,TFR",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "T",
    urunAnaGrupAdi: "Teneke"
  },
  {
    mamulAdi: "DTNRS",
    mamulNo: "0506",
    mamulGrupNo: 15,
    mamulGrupAdi: "TNRS,TFRS",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "T",
    urunAnaGrupAdi: "Teneke"
  },
  {
    mamulAdi: "ECCR",
    mamulNo: "0320",
    mamulGrupNo: 1,
    mamulGrupAdi: "CCR",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "C",
    urunAnaGrupAdi: "Soğuk"
  },
  {
    mamulAdi: "EGZR",
    mamulNo: "0405",
    mamulGrupNo: 16,
    mamulGrupAdi: "GZR,GFRS",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "G",
    urunAnaGrupAdi: "Galvaniz"
  },
  {
    mamulAdi: "EGZRB",
    mamulNo: "0409",
    mamulGrupNo: 16,
    mamulGrupAdi: "GZR,GFRS",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "G",
    urunAnaGrupAdi: "Galvaniz"
  },
  {
    mamulAdi: "EICCR",
    mamulNo: "0311",
    mamulGrupNo: 5,
    mamulGrupAdi: "ICCR",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "C",
    urunAnaGrupAdi: "Soğuk"
  },
  {
    mamulAdi: "FHRUK",
    mamulNo: "0019",
    mamulGrupNo: 11,
    mamulGrupAdi: "HRU-THRU",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "B",
    urunAnaGrupAdi: "Sıcak"
  },
  {
    mamulAdi: "FLRKK",
    mamulNo: "0016",
    mamulGrupNo: 10,
    mamulGrupAdi: "LR-LRKK",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "B",
    urunAnaGrupAdi: "Sıcak"
  },
  {
    mamulAdi: "GFR",
    mamulNo: "0413",
    mamulGrupNo: 16,
    mamulGrupAdi: "GZR,GFRS",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "G",
    urunAnaGrupAdi: "Galvaniz"
  },
  {
    mamulAdi: "GFRB",
    mamulNo: "0417",
    mamulGrupNo: 16,
    mamulGrupAdi: "GZR,GFRS",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "G",
    urunAnaGrupAdi: "Galvaniz"
  },
  {
    mamulAdi: "GFRD",
    mamulNo: "0416",
    mamulGrupNo: 16,
    mamulGrupAdi: "GZR,GFRS",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "G",
    urunAnaGrupAdi: "Galvaniz"
  },
  {
    mamulAdi: "GFRK",
    mamulNo: "0415",
    mamulGrupNo: 16,
    mamulGrupAdi: "GZR,GFRS",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "G",
    urunAnaGrupAdi: "Galvaniz"
  },
  {
    mamulAdi: "GFRKB",
    mamulNo: "0419",
    mamulGrupNo: 16,
    mamulGrupAdi: "GZR,GFRS",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "G",
    urunAnaGrupAdi: "Galvaniz"
  },
  {
    mamulAdi: "GFRS",
    mamulNo: "0414",
    mamulGrupNo: 17,
    mamulGrupAdi: "GZRS,GFR",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "G",
    urunAnaGrupAdi: "Galvaniz"
  },
  {
    mamulAdi: "GZR",
    mamulNo: "0401",
    mamulGrupNo: 16,
    mamulGrupAdi: "GZR,GFRS",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "G",
    urunAnaGrupAdi: "Galvaniz"
  },
  {
    mamulAdi: "GZRB",
    mamulNo: "0406",
    mamulGrupNo: 16,
    mamulGrupAdi: "GZR,GFRS",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "G",
    urunAnaGrupAdi: "Galvaniz"
  },
  {
    mamulAdi: "GZRBD",
    mamulNo: "0433",
    mamulGrupNo: 17,
    mamulGrupAdi: "GZRS,GFR",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "G",
    urunAnaGrupAdi: "Galvaniz"
  },
  {
    mamulAdi: "GZRBDS",
    mamulNo: "0434",
    mamulGrupNo: 17,
    mamulGrupAdi: "GZRS,GFR",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "G",
    urunAnaGrupAdi: "Galvaniz"
  },
  {
    mamulAdi: "GZRBS",
    mamulNo: "0407",
    mamulGrupNo: 16,
    mamulGrupAdi: "GZR,GFRS",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "G",
    urunAnaGrupAdi: "Galvaniz"
  },
  {
    mamulAdi: "GZRC",
    mamulNo: "0410",
    mamulGrupNo: 16,
    mamulGrupAdi: "GZR,GFRS",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "G",
    urunAnaGrupAdi: "Galvaniz"
  },
  {
    mamulAdi: "GZRD",
    mamulNo: "0404",
    mamulGrupNo: 16,
    mamulGrupAdi: "GZR,GFRS",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "G",
    urunAnaGrupAdi: "Galvaniz"
  },
  {
    mamulAdi: "GZRDS",
    mamulNo: "0425",
    mamulGrupNo: 16,
    mamulGrupAdi: "GZR,GFRS",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "G",
    urunAnaGrupAdi: "Galvaniz"
  },
  {
    mamulAdi: "GZRF",
    mamulNo: "0423",
    mamulGrupNo: 16,
    mamulGrupAdi: "GZR,GFRS",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "G",
    urunAnaGrupAdi: "Galvaniz"
  },
  {
    mamulAdi: "GZRK",
    mamulNo: "0403",
    mamulGrupNo: 16,
    mamulGrupAdi: "GZR,GFRS",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "G",
    urunAnaGrupAdi: "Galvaniz"
  },
  {
    mamulAdi: "GZRKB",
    mamulNo: "0408",
    mamulGrupNo: 16,
    mamulGrupAdi: "GZR,GFRS",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "G",
    urunAnaGrupAdi: "Galvaniz"
  },
  {
    mamulAdi: "GZRKC",
    mamulNo: "0412",
    mamulGrupNo: 16,
    mamulGrupAdi: "GZR,GFRS",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "G",
    urunAnaGrupAdi: "Galvaniz"
  },
  {
    mamulAdi: "GZRS",
    mamulNo: "0402",
    mamulGrupNo: 17,
    mamulGrupAdi: "GZRS,GFR",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "G",
    urunAnaGrupAdi: "Galvaniz"
  },
  {
    mamulAdi: "HCKK",
    mamulNo: "0008",
    mamulGrupNo: 13,
    mamulGrupAdi: "RKK-HCKK",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "B",
    urunAnaGrupAdi: "Sıcak"
  },
  {
    mamulAdi: "HGZR",
    mamulNo: "0424",
    mamulGrupNo: 16,
    mamulGrupAdi: "GZR,GFRS",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "G",
    urunAnaGrupAdi: "Galvaniz"
  },
  {
    mamulAdi: "HRP",
    mamulNo: "0112",
    mamulGrupNo: 9,
    mamulGrupAdi: "HRP-LP",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "A",
    urunAnaGrupAdi: "Asitli"
  },
  {
    mamulAdi: "HRPKK",
    mamulNo: "0111",
    mamulGrupNo: 9,
    mamulGrupAdi: "HRP-LP",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "A",
    urunAnaGrupAdi: "Asitli"
  },
  {
    mamulAdi: "HRU",
    mamulNo: "0018",
    mamulGrupNo: 11,
    mamulGrupAdi: "HRU-THRU",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "B",
    urunAnaGrupAdi: "Sıcak"
  },
  {
    mamulAdi: "HRUKK",
    mamulNo: "0017",
    mamulGrupNo: 11,
    mamulGrupAdi: "HRU-THRU",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "B",
    urunAnaGrupAdi: "Sıcak"
  },
  {
    mamulAdi: "HRUKM",
    mamulNo: "0013",
    mamulGrupNo: 11,
    mamulGrupAdi: "HRU-THRU",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "B",
    urunAnaGrupAdi: "Sıcak"
  },
  {
    mamulAdi: "ICCR",
    mamulNo: "0310",
    mamulGrupNo: 5,
    mamulGrupAdi: "ICCR",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "C",
    urunAnaGrupAdi: "Soğuk"
  },
  {
    mamulAdi: "ICCRD",
    mamulNo: "0339",
    mamulGrupNo: 5,
    mamulGrupAdi: "ICCR",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "C",
    urunAnaGrupAdi: "Soğuk"
  },
  {
    mamulAdi: "ICCRS",
    mamulNo: "0343",
    mamulGrupNo: 4,
    mamulGrupAdi: "CCRS-CRS",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "C",
    urunAnaGrupAdi: "Soğuk"
  },
  {
    mamulAdi: "IKRKK",
    mamulNo: "0004",
    mamulGrupNo: 19,
    mamulGrupAdi: "KRKK",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "B",
    urunAnaGrupAdi: "Sıcak"
  },
  {
    mamulAdi: "KRKK",
    mamulNo: "0003",
    mamulGrupNo: 19,
    mamulGrupAdi: "KRKK",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "B",
    urunAnaGrupAdi: "Sıcak"
  },
  {
    mamulAdi: "L",
    mamulNo: "0204",
    mamulGrupNo: 6,
    mamulGrupAdi: "L-LKK-DS",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "P",
    urunAnaGrupAdi: "Levha"
  },
  {
    mamulAdi: "LKK",
    mamulNo: "0203",
    mamulGrupNo: 6,
    mamulGrupAdi: "L-LKK-DS",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "P",
    urunAnaGrupAdi: "Levha"
  },
  {
    mamulAdi: "LP",
    mamulNo: "0108",
    mamulGrupNo: 9,
    mamulGrupAdi: "HRP-LP",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "A",
    urunAnaGrupAdi: "Asitli"
  },
  {
    mamulAdi: "LPKK",
    mamulNo: "0107",
    mamulGrupNo: 9,
    mamulGrupAdi: "HRP-LP",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "A",
    urunAnaGrupAdi: "Asitli"
  },
  {
    mamulAdi: "LR",
    mamulNo: "0015",
    mamulGrupNo: 10,
    mamulGrupAdi: "LR-LRKK",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "B",
    urunAnaGrupAdi: "Sıcak"
  },
  {
    mamulAdi: "LRKK",
    mamulNo: "0014",
    mamulGrupNo: 10,
    mamulGrupAdi: "LR-LRKK",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "B",
    urunAnaGrupAdi: "Sıcak"
  },
  {
    mamulAdi: "LRKKM",
    mamulNo: "0012",
    mamulGrupNo: 10,
    mamulGrupAdi: "LR-LRKK",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "B",
    urunAnaGrupAdi: "Sıcak"
  },
  {
    mamulAdi: "PL",
    mamulNo: "0206",
    mamulGrupNo: 20,
    mamulGrupAdi: "BOYAMA KUM",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "P",
    urunAnaGrupAdi: "Levha"
  },
  {
    mamulAdi: "PLKK",
    mamulNo: "0205",
    mamulGrupNo: 20,
    mamulGrupAdi: "BOYAMA KUM",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "P",
    urunAnaGrupAdi: "Levha"
  },
  {
    mamulAdi: "PLR",
    mamulNo: "0022",
    mamulGrupNo: 20,
    mamulGrupAdi: "BOYAMA KUM",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "B",
    urunAnaGrupAdi: "Sıcak"
  },
  {
    mamulAdi: "PLRKK",
    mamulNo: "0021",
    mamulGrupNo: 20,
    mamulGrupAdi: "BOYAMA KUM",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "B",
    urunAnaGrupAdi: "Sıcak"
  },
  {
    mamulAdi: "R",
    mamulNo: "0002",
    mamulGrupNo: 12,
    mamulGrupAdi: "BCKK-TRKK",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "B",
    urunAnaGrupAdi: "Sıcak"
  },
  {
    mamulAdi: "RD",
    mamulNo: "0024",
    mamulGrupNo: 12,
    mamulGrupAdi: "BCKK-TRKK",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "B",
    urunAnaGrupAdi: "Sıcak"
  },
  {
    mamulAdi: "RKK",
    mamulNo: "0001",
    mamulGrupNo: 13,
    mamulGrupAdi: "RKK-HCKK",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "B",
    urunAnaGrupAdi: "Sıcak"
  },
  {
    mamulAdi: "RKKM",
    mamulNo: "0011",
    mamulGrupNo: 13,
    mamulGrupAdi: "RKK-HCKK",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "B",
    urunAnaGrupAdi: "Sıcak"
  },
  {
    mamulAdi: "RP",
    mamulNo: "0102",
    mamulGrupNo: 7,
    mamulGrupAdi: "RP-TRP-RPK",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "A",
    urunAnaGrupAdi: "Asitli"
  },
  {
    mamulAdi: "RPD",
    mamulNo: "0116",
    mamulGrupNo: 7,
    mamulGrupAdi: "RP-TRP-RPK",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "A",
    urunAnaGrupAdi: "Asitli"
  },
  {
    mamulAdi: "RPDD",
    mamulNo: "0115",
    mamulGrupNo: 7,
    mamulGrupAdi: "RP-TRP-RPK",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "A",
    urunAnaGrupAdi: "Asitli"
  },
  {
    mamulAdi: "RPKK",
    mamulNo: "0101",
    mamulGrupNo: 7,
    mamulGrupAdi: "RP-TRP-RPK",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "A",
    urunAnaGrupAdi: "Asitli"
  },
  {
    mamulAdi: "SCR",
    mamulNo: "0303",
    mamulGrupNo: 8,
    mamulGrupAdi: "CR-CRF",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "C",
    urunAnaGrupAdi: "Soğuk"
  },
  {
    mamulAdi: "TCKK",
    mamulNo: "0010",
    mamulGrupNo: 12,
    mamulGrupAdi: "BCKK-TRKK",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "B",
    urunAnaGrupAdi: "Sıcak"
  },
  {
    mamulAdi: "TFR",
    mamulNo: "0503",
    mamulGrupNo: 14,
    mamulGrupAdi: "TNR,TFR",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "T",
    urunAnaGrupAdi: "Teneke"
  },
  {
    mamulAdi: "TFRS",
    mamulNo: "0504",
    mamulGrupNo: 15,
    mamulGrupAdi: "TNRS,TFRS",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "T",
    urunAnaGrupAdi: "Teneke"
  },
  {
    mamulAdi: "THRP",
    mamulNo: "0114",
    mamulGrupNo: 9,
    mamulGrupAdi: "HRP-LP",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "A",
    urunAnaGrupAdi: "Asitli"
  },
  {
    mamulAdi: "THRPK",
    mamulNo: "0113",
    mamulGrupNo: 9,
    mamulGrupAdi: "HRP-LP",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "A",
    urunAnaGrupAdi: "Asitli"
  },
  {
    mamulAdi: "THRU",
    mamulNo: "0020",
    mamulGrupNo: 11,
    mamulGrupAdi: "HRU-THRU",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "B",
    urunAnaGrupAdi: "Sıcak"
  },
  {
    mamulAdi: "TLP",
    mamulNo: "0110",
    mamulGrupNo: 9,
    mamulGrupAdi: "HRP-LP",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "A",
    urunAnaGrupAdi: "Asitli"
  },
  {
    mamulAdi: "TLPKK",
    mamulNo: "0109",
    mamulGrupNo: 9,
    mamulGrupAdi: "HRP-LP",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "A",
    urunAnaGrupAdi: "Asitli"
  },
  {
    mamulAdi: "TN",
    mamulNo: "0509",
    mamulGrupNo: 15,
    mamulGrupAdi: "TNRS,TFRS",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "T",
    urunAnaGrupAdi: "Teneke"
  },
  {
    mamulAdi: "TNR",
    mamulNo: "0501",
    mamulGrupNo: 14,
    mamulGrupAdi: "TNR,TFR",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "T",
    urunAnaGrupAdi: "Teneke"
  },
  {
    mamulAdi: "TNRS",
    mamulNo: "0502",
    mamulGrupNo: 15,
    mamulGrupAdi: "TNRS,TFRS",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "T",
    urunAnaGrupAdi: "Teneke"
  },
  {
    mamulAdi: "TR",
    mamulNo: "0007",
    mamulGrupNo: 12,
    mamulGrupAdi: "BCKK-TRKK",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "B",
    urunAnaGrupAdi: "Sıcak"
  },
  {
    mamulAdi: "TRKK",
    mamulNo: "0006",
    mamulGrupNo: 12,
    mamulGrupAdi: "BCKK-TRKK",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "B",
    urunAnaGrupAdi: "Sıcak"
  },
  {
    mamulAdi: "TRP",
    mamulNo: "0106",
    mamulGrupNo: 7,
    mamulGrupAdi: "RP-TRP-RPK",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "A",
    urunAnaGrupAdi: "Asitli"
  },
  {
    mamulAdi: "TRPD",
    mamulNo: "0117",
    mamulGrupNo: 7,
    mamulGrupAdi: "RP-TRP-RPK",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "A",
    urunAnaGrupAdi: "Asitli"
  },
  {
    mamulAdi: "TRPKK",
    mamulNo: "0105",
    mamulGrupNo: 7,
    mamulGrupAdi: "RP-TRP-RPK",
    urunTipi: {
      id: 100,
      value: "YASSI",
      sKapasite: true
    },
    urunAnaGrupNo: "A",
    urunAnaGrupAdi: "Asitli"
  }
];

export interface GenislikKaliteKalinik {
  kalite?: string;
  kalinlik?: number;
  880: number;
  930: number;
  1080: number;
  1130: number;
  1250: number;
}

export interface ImalatLotTonaj {
  mln: string;
  tonaj: number;
}

export const genislikCols = [880, 930, 1080, 1130, 1250] as const;

export type GenislikCol = typeof genislikCols[number];

export const genislikKaliteKalinikData: GenislikKaliteKalinik[] = [
  {
    kalite: '4237',
    880: 80,
    930: 90,
    1080: 120,
    1130: 100,
    1250: 75
  },
  {
    kalite: '3237',
    880: 70,
    930: 50,
    1080: 400,
    1130: 110,
    1250: 90
  },
  {
    kalite: '2215',
    880: 60,
    930: 120,
    1080: 100,
    1130: 110,
    1250: 130
  },
  {
    kalite: '3275',
    880: 90,
    930: 0,
    1080: 10,
    1130: 130,
    1250: 25
  },
  {
    kalite: '4327',
    880: 100,
    930: 800,
    1080: 110,
    1130: 100,
    1250: 75
  },
  {
    kalite: '8856',
    880: 10,
    930: 120,
    1080: 100,
    1130: 100,
    1250: 130
  },
  {
    kalite: '8237',
    880: 80,
    930: 90,
    1080: 120,
    1130: 100,
    1250: 75
  },
  {
    kalinlik: 1.1,
    880: 80,
    930: 90,
    1080: 120,
    1130: 100,
    1250: 75
  },
  {
    kalinlik: 1.2,
    880: 10,
    930: 90,
    1080: 200,
    1130: 800,
    1250: 65
  },
  {
    kalinlik: 1.3,
    880: 60,
    930: 120,
    1080: 100,
    1130: 110,
    1250: 130
  },
  {
    kalinlik: 1.5,
    880: 90,
    930: 0,
    1080: 10,
    1130: 130,
    1250: 25
  },
  {
    kalinlik: 2,
    880: 100,
    930: 800,
    1080: 110,
    1130: 100,
    1250: 75
  },
  {
    kalinlik: 2.1,
    880: 10,
    930: 120,
    1080: 100,
    1130: 100,
    1250: 130
  },
  {
    kalinlik: 2.2,
    880: 80,
    930: 90,
    1080: 120,
    1130: 100,
    1250: 75
  }
];

export interface Customer {
  id: number;
  name: string;
  country: {
    name: string;
    code: string;
  },
  company: string;
  date: string;
  status: string;
  verified: boolean;
  activity: number;
  representative: {
    name:  string;
    image:  string;
  },
  balance: number;
};

export function extractField(customer: Customer, field: string) {
  if(field.indexOf('.') < 0) {
    return customer[field as keyof Customer];
  }
  switch (field) {
    case 'country.name':
      return customer.country.name;
    case 'country.code':
      return customer.country.code;
    case 'representative.name':
      return customer.representative.name;
    default:
      return undefined;
  }
}

export const customerData: Customer[] = [
  {
    id: 1000,
    name: "James Butt",
    country: {
      name: "Algeria",
      code: "dz"
    },
    company: "Benton, John B Jr",
    date: "2015-09-13",
    status: "unqualified",
    verified: true,
    activity: 17,
    representative: {
      name: "Ioni Bowcher",
      image: "ionibowcher.png"
    },
    balance: 70663
  },
  {
    id: 1001,
    name: "Josephine Darakjy",
    country: {
      name: "Egypt",
      code: "eg"
    },
    company: "Chanay, Jeffrey A Esq",
    date: "2019-02-09",
    status: "proposal",
    verified: true,
    activity: 0,
    representative: {
      name: "Amy Elsner",
      image: "amyelsner.png"
    },
    balance: 82429
  },
  {
    id: 1002,
    name: "Art Venere",
    country: {
      name: "Panama",
      code: "pa"
    },
    company: "Chemel, James L Cpa",
    date: "2017-05-13",
    status: "qualified",
    verified: false,
    activity: 63,
    representative: {
      name: "Asiya Javayant",
      image: "asiyajavayant.png"
    },
    balance: 28334
  },
  {
    id: 1003,
    name: "Lenna Paprocki",
    country: {
      name: "Slovenia",
      code: "si"
    },
    company: "Feltz Printing Service",
    date: "2020-09-15",
    status: "new",
    verified: false,
    activity: 37,
    representative: {
      name: "Xuxue Feng",
      image: "xuxuefeng.png"
    },
    balance: 88521
  },
  {
    id: 1004,
    name: "Donette Foller",
    country: {
      name: "South Africa",
      code: "za"
    },
    company: "Printing Dimensions",
    date: "2016-05-20",
    status: "proposal",
    verified: true,
    activity: 33,
    representative: {
      name: "Asiya Javayant",
      image: "asiyajavayant.png"
    },
    balance: 93905
  },
  {
    id: 1005,
    name: "Simona Morasca",
    country: {
      name: "Egypt",
      code: "eg"
    },
    company: "Chapman, Ross E Esq",
    date: "2018-02-16",
    status: "qualified",
    verified: false,
    activity: 68,
    representative: {
      name: "Ivan Magalhaes",
      image: "ivanmagalhaes.png"
    },
    balance: 50041
  },
  {
    id: 1006,
    name: "Mitsue Tollner",
    country: {
      name: "Paraguay",
      code: "py"
    },
    company: "Morlong Associates",
    date: "2018-02-19",
    status: "renewal",
    verified: true,
    activity: 54,
    representative: {
      name: "Ivan Magalhaes",
      image: "ivanmagalhaes.png"
    },
    balance: 58706
  },
  {
    id: 1007,
    name: "Leota Dilliard",
    country: {
      name: "Serbia",
      code: "rs"
    },
    company: "Commercial Press",
    date: "2019-08-13",
    status: "renewal",
    verified: true,
    activity: 69,
    representative: {
      name: "Onyama Limba",
      image: "onyamalimba.png"
    },
    balance: 26640
  },
  {
    id: 1008,
    name: "Sage Wieser",
    country: {
      name: "Egypt",
      code: "eg"
    },
    company: "Truhlar And Truhlar Attys",
    date: "2018-11-21",
    status: "unqualified",
    verified: true,
    activity: 76,
    representative: {
      name: "Ivan Magalhaes",
      image: "ivanmagalhaes.png"
    },
    balance: 65369
  },
  {
    id: 1009,
    name: "Kris Marrier",
    country: {
      name: "Mexico",
      code: "mx"
    },
    company: "King, Christopher A Esq",
    date: "2015-07-07",
    status: "proposal",
    verified: false,
    activity: 3,
    representative: {
      name: "Onyama Limba",
      image: "onyamalimba.png"
    },
    balance: 63451
  },
  {
    id: 1010,
    name: "Minna Amigon",
    country: {
      name: "Romania",
      code: "ro"
    },
    company: "Dorl, James J Esq",
    date: "2018-11-07",
    status: "qualified",
    verified: false,
    activity: 38,
    representative: {
      name: "Anna Fali",
      image: "annafali.png"
    },
    balance: 71169
  },
  {
    id: 1011,
    name: "Abel Maclead",
    country: {
      name: "Singapore",
      code: "sg"
    },
    company: "Rangoni Of Florence",
    date: "2017-03-11",
    status: "qualified",
    verified: true,
    activity: 87,
    representative: {
      name: "Bernardo Dominic",
      image: "bernardodominic.png"
    },
    balance: 96842
  },
  {
    id: 1012,
    name: "Kiley Caldarera",
    country: {
      name: "Serbia",
      code: "rs"
    },
    company: "Feiner Bros",
    date: "2015-10-20",
    status: "unqualified",
    verified: false,
    activity: 80,
    representative: {
      name: "Onyama Limba",
      image: "onyamalimba.png"
    },
    balance: 92734
  },
  {
    id: 1013,
    name: "Graciela Ruta",
    country: {
      name: "Chile",
      code: "cl"
    },
    company: "Buckley Miller & Wright",
    date: "2016-07-25",
    status: "negotiation",
    verified: false,
    activity: 59,
    representative: {
      name: "Amy Elsner",
      image: "amyelsner.png"
    },
    balance: 45250
  },
  {
    id: 1014,
    name: "Cammy Albares",
    country: {
      name: "Philippines",
      code: "ph"
    },
    company: "Rousseaux, Michael Esq",
    date: "2019-06-25",
    status: "new",
    verified: true,
    activity: 90,
    representative: {
      name: "Asiya Javayant",
      image: "asiyajavayant.png"
    },
    balance: 30236
  },
  {
    id: 1015,
    name: "Mattie Poquette",
    country: {
      name: "Venezuela",
      code: "ve"
    },
    company: "Century Communications",
    date: "2017-12-12",
    status: "negotiation",
    verified: false,
    activity: 52,
    representative: {
      name: "Anna Fali",
      image: "annafali.png"
    },
    balance: 64533
  },
  {
    id: 1016,
    name: "Meaghan Garufi",
    country: {
      name: "Malaysia",
      code: "my"
    },
    company: "Bolton, Wilbur Esq",
    date: "2018-07-04",
    status: "unqualified",
    verified: false,
    activity: 31,
    representative: {
      name: "Ivan Magalhaes",
      image: "ivanmagalhaes.png"
    },
    balance: 37279
  },
  {
    id: 1017,
    name: "Gladys Rim",
    country: {
      name: "Netherlands",
      code: "nl"
    },
    company: "T M Byxbee Company Pc",
    date: "2020-02-27",
    status: "renewal",
    verified: true,
    activity: 48,
    representative: {
      name: "Stephen Shaw",
      image: "stephenshaw.png"
    },
    balance: 27381
  },
  {
    id: 1018,
    name: "Yuki Whobrey",
    country: {
      name: "Israel",
      code: "il"
    },
    company: "Farmers Insurance Group",
    date: "2017-12-21",
    status: "negotiation",
    verified: true,
    activity: 16,
    representative: {
      name: "Bernardo Dominic",
      image: "bernardodominic.png"
    },
    balance: 9257
  },
  {
    id: 1019,
    name: "Fletcher Flosi",
    country: {
      name: "Argentina",
      code: "ar"
    },
    company: "Post Box Services Plus",
    date: "2016-01-04",
    status: "renewal",
    verified: true,
    activity: 19,
    representative: {
      name: "Xuxue Feng",
      image: "xuxuefeng.png"
    },
    balance: 67783
  }
];
