import { DOCUMENT } from '@angular/common';
import { inject, InjectionToken } from '@angular/core';
import { AppEnvironment } from '../schemas/application.schemas';

export const ENV_CONFIG = new InjectionToken<AppEnvironment>('Environment Config');

export const WINDOW = new InjectionToken<Window>('An abstraction over global window object', {
  factory: () => {
    const { defaultView } = inject(DOCUMENT);
    if (!defaultView) {
      throw new Error('Window is not available');
    }
    return defaultView;
  },
});

export const LOCAL_STORAGE = new InjectionToken<Storage>('Local storage', {
  factory: () => inject(WINDOW).localStorage,
});

export const SESSION_STORAGE = new InjectionToken<Storage>('Session storage', {
  factory: () => inject(WINDOW).sessionStorage,
});
