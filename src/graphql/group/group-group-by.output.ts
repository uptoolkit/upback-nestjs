import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GroupCountAggregate } from './group-count-aggregate.output';
import { GroupAvgAggregate } from './group-avg-aggregate.output';
import { GroupSumAggregate } from './group-sum-aggregate.output';
import { GroupMinAggregate } from './group-min-aggregate.output';
import { GroupMaxAggregate } from './group-max-aggregate.output';

@ObjectType()
export class GroupGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => GroupCountAggregate, {nullable:true})
    _count?: GroupCountAggregate;

    @Field(() => GroupAvgAggregate, {nullable:true})
    _avg?: GroupAvgAggregate;

    @Field(() => GroupSumAggregate, {nullable:true})
    _sum?: GroupSumAggregate;

    @Field(() => GroupMinAggregate, {nullable:true})
    _min?: GroupMinAggregate;

    @Field(() => GroupMaxAggregate, {nullable:true})
    _max?: GroupMaxAggregate;
}
