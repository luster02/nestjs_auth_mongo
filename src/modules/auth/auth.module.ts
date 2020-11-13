import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy'
import { AuthResolver } from './auth.resolver'
import { UserSchema } from '@user/user.schema'
import { ConfigurationModule } from '@config/configuration.module';
import { IEnvironmentVariables } from '@config/configuration.interface'

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'User',
        schema: UserSchema
      }
    ]),
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
    JwtModule.registerAsync({
      imports: [ConfigurationModule],
      inject: [ConfigService],
      useFactory(config: ConfigService<IEnvironmentVariables>) {
        return {
          secret: config.get<string>('JWT_SECRET'),
          signOptions: {
            expiresIn: '1d',
          },
        };
      },
    })
  ],
  providers: [AuthService, ConfigService, JwtStrategy, AuthResolver],
  exports: [JwtStrategy, PassportModule, AuthService]
})
export class AuthModule { }
