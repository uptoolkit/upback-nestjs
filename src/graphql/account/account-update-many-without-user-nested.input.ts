import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountCreateWithoutUserInput } from './account-create-without-user.input';
import { Type } from 'class-transformer';
import { AccountCreateOrConnectWithoutUserInput } from './account-create-or-connect-without-user.input';
import { AccountUpsertWithWhereUniqueWithoutUserInput } from './account-upsert-with-where-unique-without-user.input';
import { AccountCreateManyUserInputEnvelope } from './account-create-many-user-input-envelope.input';
import { AccountWhereUniqueInput } from './account-where-unique.input';
import { AccountUpdateWithWhereUniqueWithoutUserInput } from './account-update-with-where-unique-without-user.input';
import { AccountUpdateManyWithWhereWithoutUserInput } from './account-update-many-with-where-without-user.input';
import { AccountScalarWhereInput } from './account-scalar-where.input';

@InputType()
export class AccountUpdateManyWithoutUserNestedInput {

    @Field(() => [AccountCreateWithoutUserInput], {nullable:true})
    @Type(() => AccountCreateWithoutUserInput)
    create?: Array<AccountCreateWithoutUserInput>;

    @Field(() => [AccountCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => AccountCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<AccountCreateOrConnectWithoutUserInput>;

    @Field(() => [AccountUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => AccountUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<AccountUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => AccountCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => AccountCreateManyUserInputEnvelope)
    createMany?: AccountCreateManyUserInputEnvelope;

    @Field(() => [AccountWhereUniqueInput], {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    set?: Array<AccountWhereUniqueInput>;

    @Field(() => [AccountWhereUniqueInput], {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    disconnect?: Array<AccountWhereUniqueInput>;

    @Field(() => [AccountWhereUniqueInput], {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    delete?: Array<AccountWhereUniqueInput>;

    @Field(() => [AccountWhereUniqueInput], {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    connect?: Array<AccountWhereUniqueInput>;

    @Field(() => [AccountUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => AccountUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<AccountUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [AccountUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => AccountUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<AccountUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [AccountScalarWhereInput], {nullable:true})
    @Type(() => AccountScalarWhereInput)
    deleteMany?: Array<AccountScalarWhereInput>;
}
