import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";

@InputType()
export class UserMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @Field(() => Boolean, { nullable: true })
  email?: true;

  @Field(() => Boolean, { nullable: true })
  password?: true;

  @Field(() => Boolean, { nullable: true })
  emailVerified?: true;

  @Field(() => Boolean, { nullable: true })
  image?: true;

  @Field(() => Boolean, { nullable: true })
  slug?: true;

  @Field(() => Boolean, { nullable: true })
  name?: true;
}
