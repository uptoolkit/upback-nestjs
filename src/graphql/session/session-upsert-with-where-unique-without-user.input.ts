import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SessionWhereUniqueInput } from './session-where-unique.input';
import { Type } from 'class-transformer';
import { SessionUpdateWithoutUserInput } from './session-update-without-user.input';
import { SessionCreateWithoutUserInput } from './session-create-without-user.input';

@InputType()
export class SessionUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => SessionWhereUniqueInput, {nullable:false})
    @Type(() => SessionWhereUniqueInput)
    where!: Prisma.AtLeast<SessionWhereUniqueInput, 'id' | 'sessionToken'>;

    @Field(() => SessionUpdateWithoutUserInput, {nullable:false})
    @Type(() => SessionUpdateWithoutUserInput)
    update!: SessionUpdateWithoutUserInput;

    @Field(() => SessionCreateWithoutUserInput, {nullable:false})
    @Type(() => SessionCreateWithoutUserInput)
    create!: SessionCreateWithoutUserInput;
}
