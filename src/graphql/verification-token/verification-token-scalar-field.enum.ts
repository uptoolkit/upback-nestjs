import { registerEnumType } from '@nestjs/graphql';

export enum VerificationTokenScalarFieldEnum {
    identifier = "identifier",
    token = "token",
    expires = "expires"
}


registerEnumType(VerificationTokenScalarFieldEnum, { name: 'VerificationTokenScalarFieldEnum', description: undefined })
