import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { LineSppedsService } from '../services/line-sppeds.service';
import { ProductLinesService } from '../services/product-lines.service';
import * as LineSpeedsActions from './line-speeds.actions';

@Injectable()
export class LineSpeedsEffects {
  download$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LineSpeedsActions.downloadFile),
      switchMap(({ line }) =>
        this.lineSpeedsservice.downloadFiles(line).pipe(
          map(() => LineSpeedsActions.downloadCompleted({ data: null })),
          catchError(error =>
            observableOf(LineSpeedsActions.downloadFailed(error))
          )
        )
      )
    )
  );

  upload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LineSpeedsActions.uploadRequested),
      switchMap(({ file, line }) =>
        this.lineSpeedsservice.uploadFilesList(file, line).pipe(
          // TODO: response henuz belli degil { message: response.toString() } ifadesi degismeli
          map(response =>
            LineSpeedsActions.uploadCompleted({ message: response.toString() })
          ),
          catchError(error =>
            observableOf(LineSpeedsActions.uploadFailed(error))
          )
        )
      )
    )
  );

  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LineSpeedsActions.linesRequestLoad),
      switchMap(() =>
        this.productLinesService.getAllProductLines().pipe(
          map(lines => LineSpeedsActions.linesRequestSuccess({ lines })),
          catchError(error =>
            observableOf(LineSpeedsActions.linesRequestFailure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private lineSpeedsservice: LineSppedsService,
    private productLinesService: ProductLinesService
  ) {}
}
