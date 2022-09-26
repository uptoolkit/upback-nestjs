import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountUncheckedCreateNestedManyWithoutUserInput } from '../account/account-unchecked-create-nested-many-without-user.input';
import { SessionUncheckedCreateNestedManyWithoutUserInput } from '../session/session-unchecked-create-nested-many-without-user.input';
import { PostUncheckedCreateNestedManyWithoutAuthorInput } from '../post/post-unchecked-create-nested-many-without-author.input';

@InputType()
export class UserUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:true})
    password?: string;

    @Field(() => Date, {nullable:true})
    emailVerified?: Date | string;

    @Field(() => String, {nullable:true})
    image?: string;

    @Field(() => AccountUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => SessionUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => String, {nullable:true})
    slug?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => PostUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput;
}
