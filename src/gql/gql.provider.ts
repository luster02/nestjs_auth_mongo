import { join } from "path";
import { GraphQLModule } from "@nestjs/graphql";

export const GqlProvider = [
    GraphQLModule.forRoot({
        autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
        context: ({ req }) => ({ req }),
        installSubscriptionHandlers: true,
    })
]