import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { User } from './user.schema'

@Injectable()
export class UserService {
    constructor(
        @InjectModel('User')
        private readonly userModel: Model<User>
    ) { }

    async get(id: string): Promise<User> {
        if (!id) throw new BadRequestException('id must be sent');
        const user: User = await this.userModel.findById(id);
        if (!user) throw new NotFoundException();
        return user;
    }


    async delete(id: string): Promise<void> {
        await this.get(id)
        await this.userModel.findByIdAndDelete(id);
    }
}
