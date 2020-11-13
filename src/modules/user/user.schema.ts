import { Schema, Document } from 'mongoose';
import { ObjectType, Field } from '@nestjs/graphql'

@ObjectType()
export class UserGQL {
    @Field({ nullable: true })
    _id: string

    @Field({ nullable: true })
    username: string;

    @Field({ nullable: true })
    email: string;

    @Field({ nullable: true })
    createdAt: string

    @Field({ nullable: true })
    updatedAt: string
}

export interface User extends Document {
    readonly email: string;
    readonly password: string;
    readonly username: string;
}

export const UserSchema: Schema = new Schema(
    {
        email: {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            unique: true,
            required: true,
        }
    },
    {
        timestamps: true,
    },
);