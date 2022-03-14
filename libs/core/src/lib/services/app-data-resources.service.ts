import { Inject, Injectable } from '@angular/core';
import { AppEnvironment } from '../schemas/application.schemas';
import { ENV_CONFIG } from '../tokens/config.tokens';
import { AppConfigService } from './app-config.service';

@Injectable({ providedIn: 'root' })
export class AppDataResourcesService {
  _dataSourceUrl!: string;

  constructor(
    public config: AppConfigService,
    @Inject(ENV_CONFIG) public env: AppEnvironment
  ) {}

  async setup() {
    await this.config.loader().then(conf => {
      this.config._config.env = this.env; // TODO: illegal accessing
      if (conf && conf.urls) {
        const { dev, local, base, root, test, escape, localJsonServer } =
          conf.urls;
        if (this.env.devs) {
          this._dataSourceUrl = `${dev}${base}${root}`;
        } else if (this.env.local) {
          this._dataSourceUrl = `${local}${base}${root}`;
        } else if (this.env.localJsonServer) {
          this._dataSourceUrl = `${localJsonServer}${escape}${escape}`;
        } else if (this.env.production) {
          this._dataSourceUrl = `${dev}${base}${root}`; // product url must be specified
        } else if (this.env.test) {
          this._dataSourceUrl = `${test}${base}${root}`; // product url must be specified
        } else {
          this._dataSourceUrl = `${test}${base}${root}`; // you can write manually
        }
      }
    });
  }

  getDataSourceUrl() {
    return this._dataSourceUrl;
  }
}
