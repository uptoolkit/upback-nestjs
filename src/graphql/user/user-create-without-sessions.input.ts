import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { AccountCreateNestedManyWithoutUserInput } from "../account/account-create-nested-many-without-user.input";
import { PostCreateNestedManyWithoutAuthorInput } from "../post/post-create-nested-many-without-author.input";

@InputType()
export class UserCreateWithoutSessionsInput {
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

  @Field(() => AccountCreateNestedManyWithoutUserInput, { nullable: true })
  accounts?: AccountCreateNestedManyWithoutUserInput;

  @Field(() => PostCreateNestedManyWithoutAuthorInput, { nullable: true })
  posts?: PostCreateNestedManyWithoutAuthorInput;
}
