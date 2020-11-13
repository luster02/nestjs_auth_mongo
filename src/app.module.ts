import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IEnvironmentVariables } from '@config/configuration.interface'
import { ConfigurationModule } from './configuration/configuration.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [ConfigurationModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  static port: number
  constructor(private configService: ConfigService<IEnvironmentVariables>) {
    AppModule.port = this.configService.get('PORT')
  }
}
