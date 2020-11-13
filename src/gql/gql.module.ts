import { Module } from '@nestjs/common';
import { GqlProvider } from './gql.provider'

@Module({
    imports: [...GqlProvider],
    exports: [...GqlProvider]
})
export class GqlModule { }
