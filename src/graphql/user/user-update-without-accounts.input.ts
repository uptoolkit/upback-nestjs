import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { StringFieldUpdateOperationsInput } from "../prisma/string-field-update-operations.input";
import { NullableStringFieldUpdateOperationsInput } from "../prisma/nullable-string-field-update-operations.input";
import { NullableDateTimeFieldUpdateOperationsInput } from "../prisma/nullable-date-time-field-update-operations.input";
import { SessionUpdateManyWithoutUserNestedInput } from "../session/session-update-many-without-user-nested.input";
import { PostUpdateManyWithoutAuthorNestedInput } from "../post/post-update-many-without-author-nested.input";

@InputType()
export class UserUpdateWithoutAccountsInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  email?: StringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  password?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  emailVerified?: NullableDateTimeFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  image?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  slug?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  name?: NullableStringFieldUpdateOperationsInput;

  @Field(() => SessionUpdateManyWithoutUserNestedInput, { nullable: true })
  sessions?: SessionUpdateManyWithoutUserNestedInput;

  @Field(() => PostUpdateManyWithoutAuthorNestedInput, { nullable: true })
  posts?: PostUpdateManyWithoutAuthorNestedInput;
}
