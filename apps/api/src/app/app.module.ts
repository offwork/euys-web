import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ResponseInterceptor } from './response.interceptor';
import { Kt1203Module } from './kt-1203/kt-1203.module';
import { FileServerModule } from './file-server/file-server.module';

@Module({
  imports: [Kt1203Module, FileServerModule],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
  ],
})
export class AppModule {}
