import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SessionWhereInput } from './session-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input';

@InputType()
export class SessionWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    sessionToken?: string;

    @Field(() => [SessionWhereInput], {nullable:true})
    AND?: Array<SessionWhereInput>;

    @Field(() => [SessionWhereInput], {nullable:true})
    OR?: Array<SessionWhereInput>;

    @Field(() => [SessionWhereInput], {nullable:true})
    NOT?: Array<SessionWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    expires?: DateTimeFilter;

    @Field(() => UserScalarRelationFilter, {nullable:true})
    user?: UserScalarRelationFilter;
}
