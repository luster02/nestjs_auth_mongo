import { Resolver, Query, Args } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { UserService } from './user.service'
import { UserGQL, User } from './user.schema'
import { IJwtPayload } from '@auth/interfaces'
import { GqlAuthGuard } from '@auth/guards/gql.guard'
import { CurrentUser } from '@auth/decorators/user.decorator'

@Resolver(() => UserGQL)
@UseGuards(GqlAuthGuard)
export class UserResolver {
    constructor(private _userService: UserService) { }

    @Query(() => UserGQL)
    async getUser(
        @Args('id') id: string
    ): Promise<User> {
        return this._userService.get(id)
    }

    @Query(() => UserGQL)
    async getCurentUser(
        @CurrentUser() user: IJwtPayload
    ): Promise<User> {
        return this._userService.get(user.id)
    }
}