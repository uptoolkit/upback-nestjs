import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { AccountUncheckedUpdateManyWithoutUserNestedInput } from '../account/account-unchecked-update-many-without-user-nested.input';
import { SessionUncheckedUpdateManyWithoutUserNestedInput } from '../session/session-unchecked-update-many-without-user-nested.input';

@InputType()
export class UserUncheckedUpdateWithoutPostsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    password?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    image?: NullableStringFieldUpdateOperationsInput;

    @Field(() => AccountUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => SessionUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    slug?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;
}
