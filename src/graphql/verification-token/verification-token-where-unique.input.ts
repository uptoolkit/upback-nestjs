import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VerificationTokenIdentifierTokenCompoundUniqueInput } from './verification-token-identifier-token-compound-unique.input';

@InputType()
export class VerificationTokenWhereUniqueInput {

    @Field(() => String, {nullable:true})
    token?: string;

    @Field(() => VerificationTokenIdentifierTokenCompoundUniqueInput, {nullable:true})
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput;
}
