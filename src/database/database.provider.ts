import { MongooseModule } from "@nestjs/mongoose";
import { ConfigService } from '@nestjs/config'
import { ConfigurationModule } from '@config/configuration.module'
import { IEnvironmentVariables } from '@config/configuration.interface'

export const DatabaseProvider = [
    MongooseModule.forRootAsync({
        imports: [ConfigurationModule],
        inject: [ConfigService],
        useFactory: async (configService: ConfigService<IEnvironmentVariables>) => ({
            uri: configService.get<string>('MONGODB_URI'),
            useCreateIndex: true
        })
    })
]