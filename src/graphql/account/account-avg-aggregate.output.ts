import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class AccountAvgAggregate {

    @Field(() => Float, {nullable:true})
    expires_at?: number;
}
