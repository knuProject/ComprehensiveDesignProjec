import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmModuleOptions } from './config/typeorm.config';
import { TrackPointModule } from './trackPoint/trackPoint.module';
import { TrackModule } from './track/track.module';
import { NodeModule } from './standardNode/node.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmModuleOptions),
    TrackPointModule, //
    TrackModule, //
    NodeModule, //
    ConfigModule.forRoot(),
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {}
}
