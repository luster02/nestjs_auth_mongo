import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IEnvironmentVariables } from '@config/configuration.interface'
import { ConfigurationModule } from './configuration/configuration.module';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { GqlModule } from './gql/gql.module';

@Module({
  imports: [ConfigurationModule, DatabaseModule, UserModule, AuthModule, GqlModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  static port: number
  constructor(private configService: ConfigService<IEnvironmentVariables>) {
    AppModule.port = this.configService.get('PORT')
  }
}
