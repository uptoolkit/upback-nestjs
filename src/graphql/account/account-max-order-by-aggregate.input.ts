import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class AccountMaxOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    provider?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    providerAccountId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    refresh_token?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    access_token?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    expires_at?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    token_type?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    scope?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    id_token?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    session_state?: `${SortOrder}`;
}
