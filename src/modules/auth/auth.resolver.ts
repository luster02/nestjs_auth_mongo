import { Resolver, Args, Mutation } from '@nestjs/graphql'
import { AuthService } from './auth.service'
import { AuthResult } from './interfaces'
import { SigninDto, SignupDto } from './dto'
import { UserGQL } from '@user/user.schema'

@Resolver(() => UserGQL)
export class AuthResolver {
    constructor(private readonly _authService: AuthService) { }

    @Mutation(() => AuthResult)
    async signup(@Args('userData') userData: SignupDto): Promise<AuthResult> {
        const token = await this._authService.signup(userData)
        return { token, success: true }
    }

    @Mutation(() => AuthResult)
    async signin(@Args('userData') userData: SigninDto): Promise<AuthResult> {
        const token = await this._authService.signin(userData)
        return { token, success: true }
    }
}