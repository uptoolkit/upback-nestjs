import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SessionCountOrderByAggregateInput } from './session-count-order-by-aggregate.input';
import { SessionMaxOrderByAggregateInput } from './session-max-order-by-aggregate.input';
import { SessionMinOrderByAggregateInput } from './session-min-order-by-aggregate.input';

@InputType()
export class SessionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    sessionToken?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    expires?: `${SortOrder}`;

    @Field(() => SessionCountOrderByAggregateInput, {nullable:true})
    _count?: SessionCountOrderByAggregateInput;

    @Field(() => SessionMaxOrderByAggregateInput, {nullable:true})
    _max?: SessionMaxOrderByAggregateInput;

    @Field(() => SessionMinOrderByAggregateInput, {nullable:true})
    _min?: SessionMinOrderByAggregateInput;
}
