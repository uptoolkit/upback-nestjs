import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { AccountUncheckedCreateNestedManyWithoutUserInput } from "../account/account-unchecked-create-nested-many-without-user.input";
import { PostUncheckedCreateNestedManyWithoutAuthorInput } from "../post/post-unchecked-create-nested-many-without-author.input";

@InputType()
export class UserUncheckedCreateWithoutSessionsInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: false })
  email!: string;

  @Field(() => String, { nullable: true })
  password?: string;

  @Field(() => Date, { nullable: true })
  emailVerified?: Date | string;

  @Field(() => String, { nullable: true })
  image?: string;

  @Field(() => String, { nullable: true })
  slug?: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => AccountUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  accounts?: AccountUncheckedCreateNestedManyWithoutUserInput;

  @Field(() => PostUncheckedCreateNestedManyWithoutAuthorInput, {
    nullable: true,
  })
  posts?: PostUncheckedCreateNestedManyWithoutAuthorInput;
}
