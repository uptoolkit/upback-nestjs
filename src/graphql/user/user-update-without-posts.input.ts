import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { StringFieldUpdateOperationsInput } from "../prisma/string-field-update-operations.input";
import { NullableStringFieldUpdateOperationsInput } from "../prisma/nullable-string-field-update-operations.input";
import { NullableDateTimeFieldUpdateOperationsInput } from "../prisma/nullable-date-time-field-update-operations.input";
import { AccountUpdateManyWithoutUserNestedInput } from "../account/account-update-many-without-user-nested.input";
import { SessionUpdateManyWithoutUserNestedInput } from "../session/session-update-many-without-user-nested.input";

@InputType()
export class UserUpdateWithoutPostsInput {
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

  @Field(() => AccountUpdateManyWithoutUserNestedInput, { nullable: true })
  accounts?: AccountUpdateManyWithoutUserNestedInput;

  @Field(() => SessionUpdateManyWithoutUserNestedInput, { nullable: true })
  sessions?: SessionUpdateManyWithoutUserNestedInput;
}
