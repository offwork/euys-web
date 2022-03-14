import {
  Controller,
  Get,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Multer } from 'multer'; // <- s-f-a-b vscode problem
import { FileServerService } from './file-server.service';

type File = Express.Multer.File;

@Controller('file-server')
export class FileServerController {
  constructor(private readonly service: FileServerService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: File) {
    return {
      file,
    };
  }

  @Get('filelist')
  getAllFiles() {
    return this.service.readUploadFiles();
  }

  @Get('download/:name')
  downloadFile(@Param('name') name: string) {
    return this.service.downloadFile(name);
  }
}
