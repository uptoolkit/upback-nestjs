import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class AccountSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    expires_at?: `${SortOrder}`;
}
