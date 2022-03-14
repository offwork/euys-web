/* eslint-disable @typescript-eslint/no-explicit-any */
import { Line } from '@euys/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const uploadRequested = createAction(
  '[Upload Effect] Upload Requested',
  props<{ file: File; line: string }>()
);

export const uploadFailed = createAction(
  '[Upload API] Upload Failed',
  props<{ error: string }>()
);

export const uploadProgressed = createAction(
  '[Upload API] Upload Progressed',
  props<{ progress: number }>()
);

export const uploadCompleted = createAction(
  '[Upload API] Upload Completed',
  props<{ message: string }>()
);

export const downloadFile = createAction(
  '[Download File/API] Download File',
  props<{ line: string }>()
);

export const downloadProgressed = createAction(
  '[Download File/API] Download Progressed',
  props<{ progress: number }>()
);

export const downloadCompleted = createAction(
  '[Download File/API] Download Completed',
  props<{ data: any }>()
);

export const downloadFailed = createAction(
  '[Download File/API] Download Failed',
  props<{ error: any }>()
);

export const linesRequestLoad = createAction('[Lines/API] Lines Load');

export const linesRequestSuccess = createAction(
  '[Lines/API] Lines Success',
  props<{ lines: Line[] }>()
);

export const linesRequestFailure = createAction(
  '[Lines/API] Lines Failure',
  props<{ error: any }>()
);
