import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { KtFeatureShellComponent } from './components/kt-feature-shell.component';
@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: KtFeatureShellComponent,
        children: [
          {
            path: 'kt-1201',
            loadChildren: () =>
              import('./kt-1201/kt-1201.module').then(m => m.Kt1201Module),
          },
          {
            path: 'kt-1202',
            loadChildren: () =>
              import('./kt-1202/kt-1202.module').then(m => m.Kt1202Module),
          },
          {
            path: 'kt-1203',
            loadChildren: () =>
              import('./kt-1203/kt-1203.module').then(m => m.Kt1203Module),
          },
          {
            path: 'kt-1204',
            loadChildren: () =>
              import('./kt-1204/kt-1204.module').then(m => m.Kt1204Module),
          },
          {
            path: 'kt-1205',
            loadChildren: () =>
              import('./kt-1205/kt-1205.module').then(m => m.Kt1205Module),
          },
          {
            path: 'kt-1206',
            loadChildren: () =>
              import('./kt-1206/kt-1206.module').then(m => m.Kt1206Module),
          },
          {
            path: 'kt-1207',
            loadChildren: () =>
              import('./kt-1207/kt-1207.module').then(m => m.Kt1207Module),
          },
          {
            path: 'kt-1208',
            loadChildren: () =>
              import('./kt-1208/kt-1208.module').then(m => m.Kt1208Module),
          },
          {
            path: 'kt-1209',
            loadChildren: () =>
              import('./kt-1209/kt-1209.module').then(m => m.Kt1209Module),
          },
          {
            path: 'kt-1210',
            loadChildren: () =>
              import('./kt-1210/kt-1210.module').then(m => m.Kt1210Module),
          },
          {
            path: 'kt-1211',
            loadChildren: () =>
              import('./kt-1211/kt-1211.module').then(m => m.Kt1211Module),
          },
          {
            path: 'kt-1212',
            loadChildren: () =>
              import('./kt-1212/kt-1212.module').then(m => m.Kt1212Module),
          },
          {
            path: 'kt-1213',
            loadChildren: () =>
              import('./kt-1213/kt-1213.module').then(m => m.Kt1213Module),
          },
          {
            path: 'kt-1214',
            loadChildren: () =>
              import('./kt-1214/kt-1214.module').then(m => m.Kt1214Module),
          },
          {
            path: 'kt-1215',
            loadChildren: () =>
              import('./kt-1215/kt-1215.module').then(m => m.Kt1215Module),
          },
          {
            path: 'kt-1216',
            loadChildren: () =>
              import('./kt-1216/kt-1216.module').then(m => m.Kt1216Module),
          },
          {
            path: 'kt-1217',
            loadChildren: () =>
              import('./kt-1217/kt-1217.module').then(m => m.Kt1217Module),
          },
          {
            path: 'kt-1218',
            loadChildren: () =>
              import('./kt-1218/kt-1218.module').then(m => m.Kt1218Module),
          },
          {
            path: 'kt-1219',
            loadChildren: () =>
              import('./kt-1219/kt-1219.module').then(m => m.Kt1219Module),
          },
          {
            path: 'kt-1220',
            loadChildren: () =>
              import('./kt-1220/kt-1220.module').then(m => m.Kt1220Module),
          },
          {
            path: 'kt-1221',
            loadChildren: () =>
              import('./kt-1221/kt-1221.module').then(m => m.Kt1221Module),
          },
          {
            path: 'kt-1222',
            loadChildren: () =>
              import('./kt-1222/kt-1222.module').then(m => m.Kt1222Module),
          },
          {
            path: 'kt-1223',
            loadChildren: () =>
              import('./kt-1223/kt-1223.module').then(m => m.Kt1223Module),
          },
          {
            path: 'kt-1224',
            loadChildren: () =>
              import('./kt-1224/kt-1224.module').then(m => m.Kt1224Module),
          },
          {
            path: 'kt-1225',
            loadChildren: () =>
              import('./kt-1225/kt-1225.module').then(m => m.Kt1225Module),
          },
          {
            path: 'kt-1226',
            loadChildren: () =>
              import('./kt-1226/kt-1226.module').then(m => m.Kt1226Module),
          },
          {
            path: 'kt-1230',
            loadChildren: () =>
              import('./kt-1230/kt-1230.module').then(m => m.Kt1230Module),
          },
          {
            path: 'kt-1231',
            loadChildren: () =>
              import('./kt-1231/kt-1231.module').then(m => m.Kt1231Module),
          },
          {
            path: 'kt-1232',
            loadChildren: () =>
              import('./kt-1232/kt-1232.module').then(m => m.Kt1232Module),
          },
          {
            path: 'kt-1233',
            loadChildren: () =>
              import('./kt-1233/kt-1233.module').then(m => m.Kt1233Module),
          },
          {
            path: 'kt-1234',
            loadChildren: () =>
              import('./kt-1234/kt-1234.module').then(m => m.Kt1234Module),
          },
          {
            path: 'kt-1235',
            loadChildren: () =>
              import('./kt-1235/kt-1235.module').then(m => m.Kt1235Module),
          },
          {
            path: 'kt-1236',
            loadChildren: () =>
              import('./kt-1236/kt-1236.module').then(m => m.Kt1236Module),
          },
          {
            path: 'kt-1237',
            loadChildren: () =>
              import('./kt-1237/kt-1237.module').then(m => m.Kt1237Module),
          },
          {
            path: 'kt-1238',
            loadChildren: () =>
              import('./kt-1238/kt-1238.module').then(m => m.Kt1238Module),
          },
          {
            path: 'kt-1239',
            loadChildren: () =>
              import('./kt-1239/kt-1239.module').then(m => m.Kt1239Module),
          },
          {
            path: 'kt-1240',
            loadChildren: () =>
              import('./kt-1240/kt-1240.module').then(m => m.Kt1240Module),
          },
          {
            path: 'kt-1241',
            loadChildren: () =>
              import('./kt-1241/kt-1241.module').then(m => m.Kt1241Module),
          },
          {
            path: 'kt-1242',
            loadChildren: () =>
              import('./kt-1242/kt-1242.module').then(m => m.Kt1242Module),
          },
          {
            path: 'kt-1243',
            loadChildren: () =>
              import('./kt-1243/kt-1243.module').then(m => m.Kt1243Module),
          },
          {
            path: 'kt-1244',
            loadChildren: () =>
              import('./kt-1244/kt-1244.module').then(m => m.Kt1244Module),
          },
          {
            path: 'kt-1245',
            loadChildren: () =>
              import('./kt-1245/kt-1245.module').then(m => m.Kt1245Module),
          },
          {
            path: 'kt-1246',
            loadChildren: () =>
              import('./kt-1246/kt-1246.module').then(m => m.Kt1246Module),
          },
          {
            path: 'kt-1247',
            loadChildren: () =>
              import('./kt-1247/kt-1247.module').then(m => m.Kt1247Module),
          },
          {
            path: 'kt-1248',
            loadChildren: () =>
              import('./kt-1248/kt-1248.module').then(m => m.Kt1248Module),
          },
          {
            path: 'kt-1249',
            loadChildren: () =>
              import('./kt-1249/kt-1249.module').then(m => m.Kt1249Module),
          },
          {
            path: 'kt-1250',
            loadChildren: () =>
              import('./kt-1250/kt-1250.module').then(m => m.Kt1250Module),
          },
          {
            path: 'kt-1252',
            loadChildren: () =>
              import('./kt-1252/kt-1252.module').then(m => m.Kt1252Module),
          },
          {
            path: 'kt-1253',
            loadChildren: () =>
              import('./kt-1253/kt-1253.module').then(m => m.Kt1253Module),
          },
          {
            path: 'kt-1254',
            loadChildren: () =>
              import('./kt-1254/kt-1254.module').then(m => m.Kt1254Module),
          },
          {
            path: 'kt-1255',
            loadChildren: () =>
              import('./kt-1255/kt-1255.module').then(m => m.Kt1255Module),
          },
          {
            path: 'kt-1256',
            loadChildren: () =>
              import('./kt-1256/kt-1256.module').then(m => m.Kt1256Module),
          },
          {
            path: 'kt-1257',
            loadChildren: () =>
              import('./kt-1257/kt-1257.module').then(m => m.Kt1257Module),
          },
          {
            path: 'kt-1258',
            loadChildren: () =>
              import('./kt-1258/kt-1258.module').then(m => m.Kt1258Module),
          },
          {
            path: 'kt-1259',
            loadChildren: () =>
              import('./kt-1259/kt-1259.module').then(m => m.Kt1259Module),
          },
          {
            path: 'kt-1260',
            loadChildren: () =>
              import('./kt-1260/kt-1260.module').then(m => m.Kt1260Module),
          },
          {
            path: 'kt-1261',
            loadChildren: () =>
              import('./kt-1261/kt-1261.module').then(m => m.Kt1261Module),
          },
          {
            path: 'kt-1344',
            loadChildren: () =>
              import('./kt-1344/kt-1344.module').then(m => m.Kt1344Module),
          },
          {
            path: 'kt-1301',
            loadChildren: () =>
              import('./kt-1301/kt-1301.module').then(m => m.Kt1301Module),
          },
          {
            path: 'kt-1302',
            loadChildren: () =>
              import('./kt-1302/kt-1302.module').then(m => m.Kt1302Module),
          },
          {
            path: 'kt-1303',
            loadChildren: () =>
              import('./kt-1303/kt-1303.module').then(m => m.Kt1303Module),
          },
          {
            path: 'kt-1304',
            loadChildren: () =>
              import('./kt-1304/kt-1304.module').then(m => m.Kt1304Module),
          },
          {
            path: 'kt-1307',
            loadChildren: () =>
              import('./kt-1307/kt-1307.module').then(m => m.Kt1307Module),
          },
          {
            path: 'kt-1315',
            loadChildren: () =>
              import('./kt-1315/kt-1315.module').then(m => m.Kt1315Module),
          },
          {
            path: 'kt-1318',
            loadChildren: () =>
              import('./kt-1318/kt-1318.module').then(m => m.Kt1318Module),
          },
          {
            path: 'kt-1325',
            loadChildren: () =>
              import('./kt-1325/kt-1325.module').then(m => m.Kt1325Module),
          },
          {
            path: 'kt-1333',
            loadChildren: () =>
              import('./kt-1333/kt-1333.module').then(m => m.Kt1333Module),
          },
          {
            path: 'kt-1326',
            loadChildren: () =>
              import('./kt-1326/kt-1326.module').then(m => m.Kt1326Module),
          },
          {
            path: 'kt-1339',
            loadChildren: () =>
              import('./kt-1339/kt-1339.module').then(m => m.Kt1339Module),
          },
          {
            path: 'kt-1360',
            loadChildren: () =>
              import('./kt-1360/kt-1360.module').then(m => m.Kt1360Module),
          },
          {
            path: 'kt-1362',
            loadChildren: () =>
              import('./kt-1362/kt-1362.module').then(m => m.Kt1362Module),
          },
          {
            path: 'kt-1363',
            loadChildren: () =>
              import('./kt-1363/kt-1363.module').then(m => m.Kt1363Module),
          },
          {
            path: 'kt-1364',
            loadChildren: () =>
              import('./kt-1364/kt-1364.module').then(m => m.Kt1364Module),
          },

          // kt-15**
          {
            path: 'kt-1501',
            data: { noWrite: true },
            loadChildren: () =>
              import('./kt-1201/kt-1201.module').then(m => m.Kt1201Module),
          },
          {
            path: 'kt-1502',
            data: { noWrite: true },
            loadChildren: () =>
              import('./kt-1202/kt-1202.module').then(m => m.Kt1202Module),
          },
          {
            path: 'kt-1503',
            data: { noWrite: true },
            loadChildren: () =>
              import('./kt-1203/kt-1203.module').then(m => m.Kt1203Module),
          },
          {
            path: 'kt-1504',
            data: { noWrite: true },
            loadChildren: () =>
              import('./kt-1204/kt-1204.module').then(m => m.Kt1204Module),
          },
          {
            path: 'kt-1505',
            data: { noWrite: true },
            loadChildren: () =>
              import('./kt-1205/kt-1205.module').then(m => m.Kt1205Module),
          },
          {
            path: 'kt-1506',
            data: { noWrite: true },
            loadChildren: () =>
              import('./kt-1206/kt-1206.module').then(m => m.Kt1206Module),
          },
          {
            path: 'kt-1507',
            data: { noWrite: true },
            loadChildren: () =>
              import('./kt-1207/kt-1207.module').then(m => m.Kt1207Module),
          },
          {
            path: 'kt-1508',
            data: { noWrite: true },
            loadChildren: () =>
              import('./kt-1208/kt-1208.module').then(m => m.Kt1208Module),
          },
          {
            path: 'kt-1509',
            data: { noWrite: true },
            loadChildren: () =>
              import('./kt-1209/kt-1209.module').then(m => m.Kt1209Module),
          },
          {
            path: 'kt-1510',
            data: { noWrite: true },
            loadChildren: () =>
              import('./kt-1210/kt-1210.module').then(m => m.Kt1210Module),
          },
          {
            path: 'kt-1511',
            data: { noWrite: true },
            loadChildren: () =>
              import('./kt-1211/kt-1211.module').then(m => m.Kt1211Module),
          },
          {
            path: 'kt-1512',
            data: { noWrite: true },
            loadChildren: () =>
              import('./kt-1212/kt-1212.module').then(m => m.Kt1212Module),
          },
          {
            path: 'kt-1513',
            data: { noWrite: true },
            loadChildren: () =>
              import('./kt-1213/kt-1213.module').then(m => m.Kt1213Module),
          },
          {
            path: 'kt-1514',
            data: { noWrite: true },
            loadChildren: () =>
              import('./kt-1214/kt-1214.module').then(m => m.Kt1214Module),
          },
          {
            path: 'kt-1515',
            data: { noWrite: true },
            loadChildren: () =>
              import('./kt-1215/kt-1215.module').then(m => m.Kt1215Module),
          },
          {
            path: 'kt-1516',
            data: { noWrite: true },
            loadChildren: () =>
              import('./kt-1216/kt-1216.module').then(m => m.Kt1216Module),
          },
          {
            path: 'kt-1517',
            data: { noWrite: true },
            loadChildren: () =>
              import('./kt-1217/kt-1217.module').then(m => m.Kt1217Module),
          },
          {
            path: 'kt-1518',
            data: { noWrite: true },
            loadChildren: () =>
              import('./kt-1218/kt-1218.module').then(m => m.Kt1218Module),
          },
          {
            path: 'kt-1519',
            data: { noWrite: true },
            loadChildren: () =>
              import('./kt-1219/kt-1219.module').then(m => m.Kt1219Module),
          },
          {
            path: 'kt-1520',
            data: { noWrite: true },
            loadChildren: () =>
              import('./kt-1220/kt-1220.module').then(m => m.Kt1220Module),
          },
          {
            path: 'kt-1521',
            data: { noWrite: true },
            loadChildren: () =>
              import('./kt-1221/kt-1221.module').then(m => m.Kt1221Module),
          },
          {
            path: 'kt-1522',
            data: { noWrite: true },
            loadChildren: () =>
              import('./kt-1222/kt-1222.module').then(m => m.Kt1222Module),
          },
          {
            path: 'kt-1523',
            data: { noWrite: true },
            loadChildren: () =>
              import('./kt-1223/kt-1223.module').then(m => m.Kt1223Module),
          },
          {
            path: 'kt-1524',
            data: { noWrite: true },
            loadChildren: () =>
              import('./kt-1224/kt-1224.module').then(m => m.Kt1224Module),
          },
          {
            path: 'kt-1525',
            data: { noWrite: true },
            loadChildren: () =>
              import('./kt-1225/kt-1225.module').then(m => m.Kt1225Module),
          },
          {
            path: 'kt-1526',
            data: { noWrite: true },
            loadChildren: () =>
              import('./kt-1226/kt-1226.module').then(m => m.Kt1226Module),
          },
          {
            path: 'kt-1530',
            data: { noWrite: true },
            loadChildren: () =>
              import('./kt-1230/kt-1230.module').then(m => m.Kt1230Module),
          },
          {
            path: 'kt-1531',
            data: { noWrite: true },
            loadChildren: () =>
              import('./kt-1231/kt-1231.module').then(m => m.Kt1231Module),
          },
          {
            path: 'kt-1532',
            data: { noWrite: true },
            loadChildren: () =>
              import('./kt-1232/kt-1232.module').then(m => m.Kt1232Module),
          },
          {
            path: 'kt-1533',
            data: { noWrite: true },
            loadChildren: () =>
              import('./kt-1233/kt-1233.module').then(m => m.Kt1233Module),
          },
          {
            path: 'kt-1534',
            data: { noWrite: true },
            loadChildren: () =>
              import('./kt-1234/kt-1234.module').then(m => m.Kt1234Module),
          },
          {
            path: 'kt-1535',
            data: { noWrite: true },
            loadChildren: () =>
              import('./kt-1235/kt-1235.module').then(m => m.Kt1235Module),
          },
          {
            path: 'kt-1536',
            data: { noWrite: true },
            loadChildren: () =>
              import('./kt-1236/kt-1236.module').then(m => m.Kt1236Module),
          },
          {
            path: 'kt-1537',
            data: { noWrite: true },
            loadChildren: () =>
              import('./kt-1237/kt-1237.module').then(m => m.Kt1237Module),
          },
          {
            path: 'kt-1538',
            data: { noWrite: true },
            loadChildren: () =>
              import('./kt-1238/kt-1238.module').then(m => m.Kt1238Module),
          },
          {
            path: 'kt-1539',
            data: { noWrite: true },
            loadChildren: () =>
              import('./kt-1239/kt-1239.module').then(m => m.Kt1239Module),
          },
          {
            path: 'kt-1540',
            data: { noWrite: true },
            loadChildren: () =>
              import('./kt-1240/kt-1240.module').then(m => m.Kt1240Module),
          },
          {
            path: 'kt-1541',
            data: { noWrite: true },
            loadChildren: () =>
              import('./kt-1241/kt-1241.module').then(m => m.Kt1241Module),
          },
          {
            path: 'kt-1542',
            data: { noWrite: true },
            loadChildren: () =>
              import('./kt-1242/kt-1242.module').then(m => m.Kt1242Module),
          },
          {
            path: 'kt-1543',
            data: { noWrite: true },
            loadChildren: () =>
              import('./kt-1243/kt-1243.module').then(m => m.Kt1243Module),
          },
          {
            path: 'kt-1544',
            data: { noWrite: true },
            loadChildren: () =>
              import('./kt-1244/kt-1244.module').then(m => m.Kt1244Module),
          },
          {
            path: 'kt-1545',
            data: { noWrite: true },
            loadChildren: () =>
              import('./kt-1245/kt-1245.module').then(m => m.Kt1245Module),
          },
          {
            path: 'kt-1546',
            data: { noWrite: true },
            loadChildren: () =>
              import('./kt-1246/kt-1246.module').then(m => m.Kt1246Module),
          },
          {
            path: 'kt-1547',
            data: { noWrite: true },
            loadChildren: () =>
              import('./kt-1247/kt-1247.module').then(m => m.Kt1247Module),
          },
          {
            path: 'kt-1548',
            data: { noWrite: true },
            loadChildren: () =>
              import('./kt-1248/kt-1248.module').then(m => m.Kt1248Module),
          },
          {
            path: 'kt-1549',
            data: { noWrite: true },
            loadChildren: () =>
              import('./kt-1249/kt-1249.module').then(m => m.Kt1249Module),
          },
          {
            path: 'kt-1550',
            data: { noWrite: true },
            loadChildren: () =>
              import('./kt-1250/kt-1250.module').then(m => m.Kt1250Module),
          },
          {
            path: 'kt-1552',
            data: { noWrite: true },
            loadChildren: () =>
              import('./kt-1252/kt-1252.module').then(m => m.Kt1252Module),
          },
          {
            path: 'kt-1553',
            data: { noWrite: true },
            loadChildren: () =>
              import('./kt-1253/kt-1253.module').then(m => m.Kt1253Module),
          },
          {
            path: 'kt-1554',
            data: { noWrite: true },
            loadChildren: () =>
              import('./kt-1254/kt-1254.module').then(m => m.Kt1254Module),
          },
          {
            path: 'kt-1555',
            data: { noWrite: true },
            loadChildren: () =>
              import('./kt-1255/kt-1255.module').then(m => m.Kt1255Module),
          },
          {
            path: 'kt-1556',
            data: { noWrite: true },
            loadChildren: () =>
              import('./kt-1256/kt-1256.module').then(m => m.Kt1256Module),
          },
          {
            path: 'kt-1557',
            data: { noWrite: true },
            loadChildren: () =>
              import('./kt-1257/kt-1257.module').then(m => m.Kt1257Module),
          },
          {
            path: 'kt-1558',
            data: { noWrite: true },
            loadChildren: () =>
              import('./kt-1258/kt-1258.module').then(m => m.Kt1258Module),
          },
          {
            path: 'kt-1359',
            loadChildren: () =>
              import('./kt-1359/kt-1359.module').then(m => m.Kt1359Module),
          },
          {
            path: 'kt-1331',
            loadChildren: () =>
              import('./kt-1331/kt-1331.module').then(m => m.Kt1331Module),
          },
          {
            path: 'kt-1332',
            loadChildren: () =>
              import('./kt-1332/kt-1332.module').then(m => m.Kt1332Module),
          },
          {
            path: 'kt-1312',
            loadChildren: () =>
              import('./kt-1312/kt-1312.module').then(m => m.Kt1312Module),
          },
          {
            path: 'kt-1313',
            loadChildren: () =>
              import('./kt-1313/kt-1313.module').then(m => m.Kt1313Module),
          },
          {
            path: 'kt-1330',
            loadChildren: () =>
              import('./kt-1330/kt-1330.module').then(m => m.Kt1330Module),
          },
          {
            path: 'kt-1340',
            loadChildren: () =>
              import('./kt-1340/kt-1340.module').then(m => m.Kt1340Module),
          },
          {
            path: 'kt-1341',
            loadChildren: () =>
              import('./kt-1341/kt-1341.module').then(m => m.Kt1341Module),
          },
          {
            path: 'kt-1319',
            loadChildren: () =>
              import('./kt-1319/kt-1319.module').then(m => m.Kt1319Module),
          },
          {
            path: 'kt-1320',
            loadChildren: () =>
              import('./kt-1320/kt-1320.module').then(m => m.Kt1320Module),
          },
          {
            path: 'kt-1314',
            loadChildren: () =>
              import('./kt-1314/kt-1314.module').then(m => m.Kt1314Module),
          },
          {
            path: 'kt-1321',
            loadChildren: () =>
              import('./kt-1321/kt-1321.module').then(m => m.Kt1321Module),
          },
          {
            path: 'kt-1306',
            loadChildren: () =>
              import('./kt-1306/kt-1306.module').then(m => m.Kt1306Module),
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class KtSpecsRoutingModule {}
