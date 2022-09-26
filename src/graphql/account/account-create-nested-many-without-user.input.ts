import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountCreateWithoutUserInput } from './account-create-without-user.input';
import { Type } from 'class-transformer';
import { AccountCreateOrConnectWithoutUserInput } from './account-create-or-connect-without-user.input';
import { AccountCreateManyUserInputEnvelope } from './account-create-many-user-input-envelope.input';
import { AccountWhereUniqueInput } from './account-where-unique.input';

@InputType()
export class AccountCreateNestedManyWithoutUserInput {

    @Field(() => [AccountCreateWithoutUserInput], {nullable:true})
    @Type(() => AccountCreateWithoutUserInput)
    create?: Array<AccountCreateWithoutUserInput>;

    @Field(() => [AccountCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => AccountCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<AccountCreateOrConnectWithoutUserInput>;

    @Field(() => AccountCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => AccountCreateManyUserInputEnvelope)
    createMany?: AccountCreateManyUserInputEnvelope;

    @Field(() => [AccountWhereUniqueInput], {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    connect?: Array<AccountWhereUniqueInput>;
}
