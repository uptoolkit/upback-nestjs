import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";

@ObjectType()
export class VerificationToken {
  @Field(() => String, { nullable: false })
  identifier!: string;

  @Field(() => String, { nullable: false })
  token!: string;

  @Field(() => Date, { nullable: false })
  expires!: Date;
}
