import { Module } from '@nestjs/common';
import { FileServerService } from './file-server.service';
import { FileServerController } from './file-server.controller';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  providers: [FileServerService],
  imports: [
    MulterModule.registerAsync({
      useClass: FileServerService,
    }),
  ],
  controllers: [FileServerController],
})
export class FileServerModule {}
