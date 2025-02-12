import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { AccountOrderByRelationAggregateInput } from '../account/account-order-by-relation-aggregate.input';
import { SessionOrderByRelationAggregateInput } from '../session/session-order-by-relation-aggregate.input';
import { PostOrderByRelationAggregateInput } from '../post/post-order-by-relation-aggregate.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    password?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    emailVerified?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    image?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    slug?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    name?: SortOrderInput;

    @Field(() => AccountOrderByRelationAggregateInput, {nullable:true})
    accounts?: AccountOrderByRelationAggregateInput;

    @Field(() => SessionOrderByRelationAggregateInput, {nullable:true})
    sessions?: SessionOrderByRelationAggregateInput;

    @Field(() => PostOrderByRelationAggregateInput, {nullable:true})
    posts?: PostOrderByRelationAggregateInput;
}
