import { Navs } from '@euys/api-interfaces';

export interface AppEnvironment {
  devs: boolean;
  devTools: boolean;
  e2e: boolean;
  local: boolean;
  localJsonServer: boolean;
  production: boolean;
  test: boolean;
}

export interface AppConfiguration {
  locale: string;
  application?: AppInformation;
  sideNav: { expandedSidenav: boolean; preserveState: boolean };
  languages: Array<{ key: string; value: string }>;
  /* TODO: It may be appropriate to use alone. */
  urls?: AppResources;
  mainNavs: Navs[]; // TODO: must be type `Navs`
  env: AppEnvironment;
}

export interface AppInformation {
  storagePrefix: string;
  name: string;
  copyright: string;
  version: string;
}

export interface AppResources {
  local: string;
  localJsonServer: string;
  dev: string;
  test: string;
  base: string;
  root: string;
  escape: string;
  resources: unknown;
}
