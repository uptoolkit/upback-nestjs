import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { VerificationTokenCountAggregate } from './verification-token-count-aggregate.output';
import { VerificationTokenMinAggregate } from './verification-token-min-aggregate.output';
import { VerificationTokenMaxAggregate } from './verification-token-max-aggregate.output';

@ObjectType()
export class AggregateVerificationToken {

    @Field(() => VerificationTokenCountAggregate, {nullable:true})
    _count?: VerificationTokenCountAggregate;

    @Field(() => VerificationTokenMinAggregate, {nullable:true})
    _min?: VerificationTokenMinAggregate;

    @Field(() => VerificationTokenMaxAggregate, {nullable:true})
    _max?: VerificationTokenMaxAggregate;
}
