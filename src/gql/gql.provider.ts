import { join } from "path";
import { GraphQLModule } from "@nestjs/graphql";
import { UserModule } from '@user/user.module'
import { AuthModule } from '@auth/auth.module'

export const GqlProvider = [
    GraphQLModule.forRoot({
        autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
        context: ({ req }) => ({ req }),
        installSubscriptionHandlers: true,
        include: [
            UserModule,
            AuthModule,
        ]
    })
]