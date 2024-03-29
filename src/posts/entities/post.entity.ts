import { ObjectType, Field, ID } from '@nestjs/graphql';
import { User } from '../../users/entities/user.entity';

@ObjectType()
export class Post {
  @Field(() => ID, { nullable: false })
  id!: number;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;

  @Field(() => String, { nullable: false })
  title!: string;

  @Field(() => User, { nullable: false })
  author: User;
}
