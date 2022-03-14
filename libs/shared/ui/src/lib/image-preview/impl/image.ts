export interface Image {
  name: string;
  size: string;
  url: string;
}

export interface ImagePreviewDialogConfig {
  panelClass?: string;
  hasBackdrop?: boolean;
  backdropClass?: string;
  image?: string;
}

export const DEFAULT_CONFIG: ImagePreviewDialogConfig = {
  hasBackdrop: true,
  backdropClass: 'dark-backdrop',
  panelClass: 'tm-file-preview-dialog-panel',
  image: null,
};
