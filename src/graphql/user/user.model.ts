import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Account } from '../account/account.model';
import { Session } from '../session/session.model';
import { Post } from '../post/post.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:true})
    password!: string | null;

    @Field(() => Date, {nullable:true})
    emailVerified!: Date | null;

    @Field(() => String, {nullable:true})
    image!: string | null;

    @Field(() => [Account], {nullable:true})
    accounts?: Array<Account>;

    @Field(() => [Session], {nullable:true})
    sessions?: Array<Session>;

    @Field(() => String, {nullable:true})
    slug!: string | null;

    @Field(() => String, {nullable:true})
    name!: string | null;

    @Field(() => [Post], {nullable:true})
    posts?: Array<Post>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
