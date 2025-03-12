import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { StringFieldUpdateOperationsInput } from "../prisma/string-field-update-operations.input";
import { DateTimeFieldUpdateOperationsInput } from "../prisma/date-time-field-update-operations.input";
import { UserUpdateOneRequiredWithoutSessionsNestedInput } from "../user/user-update-one-required-without-sessions-nested.input";

@InputType()
export class SessionUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  sessionToken?: StringFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  expires?: DateTimeFieldUpdateOperationsInput;

  @Field(() => UserUpdateOneRequiredWithoutSessionsNestedInput, {
    nullable: true,
  })
  user?: UserUpdateOneRequiredWithoutSessionsNestedInput;
}
