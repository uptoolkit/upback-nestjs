import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VerificationTokenWhereInput } from './verification-token-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyVerificationTokenArgs {

    @Field(() => VerificationTokenWhereInput, {nullable:true})
    @Type(() => VerificationTokenWhereInput)
    where?: VerificationTokenWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
