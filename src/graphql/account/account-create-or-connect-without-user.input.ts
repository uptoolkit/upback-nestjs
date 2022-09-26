import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountWhereUniqueInput } from './account-where-unique.input';
import { Type } from 'class-transformer';
import { AccountCreateWithoutUserInput } from './account-create-without-user.input';

@InputType()
export class AccountCreateOrConnectWithoutUserInput {

    @Field(() => AccountWhereUniqueInput, {nullable:false})
    @Type(() => AccountWhereUniqueInput)
    where!: AccountWhereUniqueInput;

    @Field(() => AccountCreateWithoutUserInput, {nullable:false})
    @Type(() => AccountCreateWithoutUserInput)
    create!: AccountCreateWithoutUserInput;
}
