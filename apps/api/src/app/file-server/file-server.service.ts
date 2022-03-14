import { Injectable } from '@nestjs/common';
import {
  MulterModuleOptions,
  MulterOptionsFactory,
} from '@nestjs/platform-express';
import { readdir, readFile } from 'fs';
import { diskStorage } from 'multer';

@Injectable()
export class FileServerService implements MulterOptionsFactory {
  private URL = 'http://localhost:3333/api/v1/file-server/filelist/';
  private PATH = './dist/apps/api/assets/uploads';

  createMulterOptions(): MulterModuleOptions {
    return {
      storage: diskStorage({
        destination: this.PATH,
        filename: (req, file, callback) => {
          callback(null, file.originalname);
        },
      }),
    };
  }

  async readUploadFiles() {
    const files = await new Promise<
      Array<{
        uuid?: string;
        name: string;
        url: string;
      }>
    >((resolve, reject) => {
      readdir(this.PATH, (err, files) => {
        err
          ? reject(err)
          : resolve(
              files.map(file => ({
                name: file,
                url: this.URL + file,
              }))
            );
      });
    });

    return files;
  }

  async downloadFile(filename: string) {
    const filePath = this.PATH + '/' + filename;
    const file = await new Promise<Buffer>((resolve, reject) => {
      readFile(filePath, {}, (err, data) => {
        err ? reject(err) : resolve(data);
      });
    });

    return file;
  }
}
